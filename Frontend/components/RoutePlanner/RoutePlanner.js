"use client";
import React, { useState, useEffect } from "react";

const RoutePlanner = () => {
  const [data, setData] = useState({
    origin: "",
    via1: "",
    via2: "",
    via3: "",
    destination: "",
  });
  const [placeSuggestions, setPlaceSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(""); // Track active input field

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

  const handleChange = (e, key) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setActiveField(key); // Set the active field
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (activeField && data[activeField]) {
        fetchPlaceSuggestions(data[activeField]);
      }
    }, 300); // Debounce API calls

    return () => clearTimeout(delayDebounceFn);
  }, [data, activeField]);

  const handleSuggestionClick = (suggestion) => {
    setData((prev) => ({
      ...prev,
      [activeField]: suggestion,
    }));
    setPlaceSuggestions([]); // Clear suggestions after selection
  };

  const renderInputWithSuggestions = (field, placeholder) => (
    <div style={{ position: "relative" }}>
      <input
        placeholder={placeholder}
        value={data[field]}
        onChange={(e) => handleChange(e, field)}
      />
      {activeField === field && placeSuggestions.length > 0 && (
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
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const generateRoute = ({data}) => {
    
  }

  return (
    <>
      <div>
        <h1>Route Planner</h1>
        {renderInputWithSuggestions("origin", "Origin")}
        {renderInputWithSuggestions("via1", "Via 1")}
        {renderInputWithSuggestions("via2", "Via 2")}
        {renderInputWithSuggestions("via3", "Via 3")}
        {renderInputWithSuggestions("destination", "Destination")}
        <button onClick={generateRoute(data)}>Generate ROute</button>
      </div>
    </>
  );
};

export default RoutePlanner;
