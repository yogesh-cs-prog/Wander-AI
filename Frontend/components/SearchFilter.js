"use client";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchFilter = () => {
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [route, setRoute] = useState([]);
  const [placeSuggestions, setPlaceSuggestions] = useState([]);

  const handleChange = (e) => {
    console.log("Typing value:", e.target.value);
    setPlace(e.target.value);
  };

  const fetchPlaceSuggestions = async (query) => {
    if (!query) {
      setPlaceSuggestions([]);
      return;
    }
    const apiKey = "e52c53280eef498eb1c0967cec4416bd";
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          query
        )}&key=${apiKey}&limit=5`
      );
      const data = await response.json();
      const suggestions =
        data.results?.map((result) => result.formatted) || [];
      setPlaceSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching place suggestions:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (place) fetchPlaceSuggestions(place);
    }, 300); // Debounce API calls

    return () => clearTimeout(delayDebounceFn);
  }, [place]);

  const fetchCoordinates = async () => {
    setPlaceSuggestions([])
    try {
      console.log("Entered Place:", place);
      if (!place) {
        setMessage("Please enter a valid place.");
        return;
      }
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          place
        )}&key=e52c53280eef498eb1c0967cec4416bd`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        const formattedPlace = encodeURIComponent(data.results[0].formatted);
        window.location.href = `/tour-grid?place=${formattedPlace}&lat=${lat}&lon=${lng}`;
      }else {
        setMessage("No coordinates found for the entered city");
      }
      // if (data.results && data.results.length > 0) {
      //   const { lat, lng } = data.results[0].geometry;

      //   const mappingResponse = await fetch("http://127.0.0.1:8000/get_route", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       lat: lat,
      //       lon: lng,
      //       radius: 2000,
      //       user_preference: "Suggest some good places to eat",
      //     }),
      //   });
      //   if (mappingResponse.ok) {
      //     const result = await mappingResponse.json();
      //     setRoute(result.route);
      //     setRecommendations(result.recommendations);
      //   } else {
      //     setMessage("Failed to send the coordinates");
      //   }
      // } else {
      //   setMessage("No coordinates found for the entered city");
      // }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className="container container-1400">
      <div
        className="search-filter-inner"
        data-aos="zoom-out-down"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-map-marker-alt" />
          </div>
          <input
            type="text"
            placeholder="Enter City"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
          {/* Suggestions Dropdown */}
          {placeSuggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                backgroundColor: "white",
                border: "1px solid #ddd",
                listStyle: "none",
                padding: "8px",
                margin: 0,
                zIndex: 10,
                maxHeight: "150px",
                overflowY: "auto",
              }}
            >
              {placeSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setPlace(suggestion); // Set selected place to input
                    setPlaceSuggestions([]); // Clear suggestions
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-flag" />
          </div>
          <span className="title">All Activity</span>
          <select name="activity" id="activity">
            <option value="value1">Choose Activity</option>
            <option value="value2">Daily</option>
            <option value="value2">Monthly</option>
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-calendar-alt" />
          </div>
          <span className="title">Departure Date</span>
          <select name="date" id="date">
            <option value="value1">Date from</option>
            <option value="value2">10</option>
            <option value="value2">20</option>
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-users" />
          </div>
          <span className="title">Guests</span>
          <select name="cuests" id="cuests">
            <option value="value1">0</option>
            <option value="value2">1</option>
            <option value="value2">2</option>
          </select>
        </div>
        <div className="search-button">
          <button className="theme-btn" onClick={fetchCoordinates}>
            <span data-hover="Search">Search</span>
            <i className="far fa-search" />
          </button>
        </div>
        {route.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Top Routes</h2>
            <ul>
              {route.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.category} - Rating: {item.rating}
                </li>
              ))}
            </ul>
          </div>
        )}
        {recommendations.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Recommendations</h2>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>
                  {rec.label} - Score: {rec.score}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {message}
    </div>
  );
};

export default SearchFilter;
