from fastapi import FastAPI
from pydantic import BaseModel
import httpx
from typing import List

# Define the request body schema
class LocationRequest(BaseModel):
    origin: str  # Format: "lat,lon"
    destination: str  # Format: "lat,lon"
    waypoints: List[str]  # List of waypoints in the format "lat,lon"

# Create FastAPI app
app = FastAPI()

HERE_API_KEY = '1BCPmoPLhFXSdSskz88pAE9GaZw9RmCKkL3-AGQTkeU'
HERE_API_URL = 'https://router.hereapi.com/v8/routes'

# Helper function to make a request to HERE API
async def get_route_from_here(origin: str, destination: str, waypoints: List[str]) -> dict:
    # Build the 'via' query parameters
    via_points = '&'.join([f'via={point}' for point in waypoints])
    
    # Define the URL with query parameters
    url = f'{HERE_API_URL}?origin={origin}&destination={destination}&{via_points}&transportMode=car&return=polyline,summary&apiKey={HERE_API_KEY}'
    
    async with httpx.AsyncClient() as client:
        # Send the GET request to HERE API
        response = await client.get(url)
        
        # Return the response JSON
        return response.json()

@app.post("/calculate_route/")
async def calculate_route(request: LocationRequest):
    origin = request.origin
    destination = request.destination
    waypoints = request.waypoints

    # Get the route details from HERE API
    route_data = await get_route_from_here(origin, destination, waypoints)
    
    # Extract summaries from all sections in the response
    if 'routes' in route_data and len(route_data['routes']) > 0:
        route_summaries = []
        for route in route_data['routes']:
            for section in route.get('sections', []):
                summary = section.get('summary', {})
                if summary:
                    route_summaries.append(summary)
        
        # Return the list of summary data
        return {"summaries": route_summaries}
    else:
        return {"error": "No route found"}
