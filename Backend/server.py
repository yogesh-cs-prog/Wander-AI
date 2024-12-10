import requests
from transformers import pipeline
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware
import torch
# Initialize FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the pre-trained Hugging Face NLP model
device = 0 if torch.cuda.is_available() else -1

# Load the pre-trained Hugging Face NLP model with CUDA support
nlp_model = pipeline("zero-shot-classification", model="facebook/bart-large-mnli", device=device)

# OpenTripMap API endpoint and key
OPEN_TRIP_MAP_API_URL = "https://api.opentripmap.com/0.1/en/places/radius"
API_KEY = "5ae2e3f221c38a28845f05b68ea38460a0dcea443cd09d220b3b8daa"  # Replace with your actual API key

# Mapping of categories to OpenTripMap kinds
kinds_mapping = {
    "historical landmarks": "historic",
    "restaurants": "restaurants",
    "temples" : "hindu_temples",
    "parks": "parks",
    "theaters": "cinemas",
    "museums": "museums",
    "interesting_places" : "interesting_places",
    "All Places" : ""
    # Add more kinds as needed
}

# Define the request model for FastAPI  
class RouteRequest(BaseModel):
    lat: float
    lon: float
    radius: int
    user_preference: str

# Function to get places from OpenTripMap API
def get_places_nearby(lat: float, lon: float, radius: int, kinds: str) -> List[Dict]:
    params = {
        "lat": lat,
        "lon": lon,
        "radius": radius,
        "kinds": kinds,
        "apikey": API_KEY
    }
    response = requests.get(OPEN_TRIP_MAP_API_URL, params=params)
    if response.status_code == 200:
        return response.json().get("features", [])
    return []

# Function to infer category from user preference using NLP model
def infer_category_from_user_preference(user_input: str) -> str:
    candidate_labels = ["historical landmarks","temples", "restaurants", "parks", "theaters", "museums", "interesting_places"]
    result = nlp_model(user_input, candidate_labels=candidate_labels)
    # Get the most likely category from the NLP model
    return result['labels'][0]  # We take the most probable label

# Main route to handle the request


@app.post("/get_route")
async def get_route(request: RouteRequest):
    # Step 1: Use NLP model to infer the category from user input
    inferred_category = infer_category_from_user_preference(request.user_preference)
    print(f"Inferred Category: {inferred_category}")
    
    # Step 2: Map the inferred category to OpenTripMap 'kinds' parameter
    kinds = kinds_mapping.get(inferred_category, "")
    
    if not kinds:
        return {
            "message": "Sorry, we couldn't understand your preference. Please try again with a clearer request.",
            "route": []
        }

    # Step 3: Get places near the given latitude and longitude
    places = get_places_nearby(request.lat, request.lon, request.radius, kinds )
    
    # Step 4: Filter and format the response to only show relevant places
    route = []
    for place in places:
        if 'properties' in place:
        # Get all the properties available for the place
            properties = place['properties']
        
        # Format the properties into a dictionary
            formatted_place = {}
            for key, value in properties.items():
                formatted_place[key] = value
        
        # Append the formatted place to the route
            route.append(formatted_place)

    # Step 5: Return response with filtered route and recommendations
    sorted_route = sorted(route, key=lambda x: x['rate'], reverse=True)

    # Step 6: Return response with filtered and sorted route and recommendations
    if not sorted_route:
        return {
            "message": f"No places found for your preference: {request.user_preference}.",
            "route": [],
            "recommendations": [{
                "label": "No match found",
                "score": 0.0
            }]
        }

    return {
        "features": sorted_route,  # Return top 10 results
        "recommendations": [{
            "label": inferred_category,
            "score": 1.0
        }]
    }



class RouteRequest(BaseModel):
    lat: float
    lon: float
    radius: int
@app.post("/routes")
async def get_all_routes(request: RouteRequest) -> Dict:
    """
    Fetches routes (places) from OpenTripMap API based on latitude, longitude, and radius.
    """
    # Build the request URL with the given parameters
    params = {
        "lat": request.lat,
        "lon": request.lon,
        "radius": request.radius,
        "apikey": API_KEY,
    }
    response = requests.get(OPEN_TRIP_MAP_API_URL, params=params)

    

    # Check if the API call is successful
    if response.status_code == 200:
        # Parse the response JSON
        data = response.json()
        features = data.get("features", [])

        # Return the full FeatureCollection structure
        return {
            "type": data.get("type", "Unknown"),
            "features": features
        }

    # Handle API errors gracefully
    raise HTTPException(
        status_code=response.status_code,
        detail=f"Error fetching data: {response.json().get('message', 'Unknown error')}"
    )