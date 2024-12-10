"use client";

import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";
import AILoader from "@/components/Loader/aiLoader";
import Loader from "@/components/Loader/Loader";
import RoutePlanner from "@/components/RoutePlanner/RoutePlanner";


const Page = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [show, setShow] = useState(10); // Controls the number of items displayed
  const [route, setRoute] = useState([]);
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const place = searchParams.get("place");
  const [prompt, setPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [loading, setLoading] = useState(true)
 
  // Fetch route data on page load or lat, lon changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://127.0.0.1:8000/routes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lat: lat,
          lon: lon,
          radius: 2000,
        }),
      });

      if (data.ok) {
        const result = await data.json();
        setRoute(result.features || []); // Safely handle empty or missing 'features'
        setLoading(false);
      } else {
        console.log("Error fetching data");
      }
    };

    if (lat && lon) {
      fetchData();
    }
      
   
  }, [lat, lon, place]);

  const handleLoadMore = () => {
    setShow((prevShow) => prevShow + 10); // Increase displayed items by 10
  };

  const displayedItems = Array.isArray(route) ? route.slice(0, show) : [];

  const handleAiResponse = async () => {
    setAiLoading(true);
    console.log("Fetching Data...");
    const response = await fetch("http://127.0.0.1:8000/get_route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lat: lat,
        lon: lon,
        radius: 2000,
        user_preference: prompt,
      }),
    });
    if (response.ok) {
      console.log("Response OK, parsing data...");
      const result = await response.json();
      console.log("Fetched result:", result);
      setAiLoading(false);
      setRoute(result.features || []); // Safely handle empty or missing 'features'
    } else {
      console.log("Error fetching data");
      setAiLoading(false); // Set loading to false in case of error
    }
  };

  return (
  <>
    {loading ? <Loader /> : <div><ReveloLayout>
      <Banner
        pageTitle={"Tour Grid View"}
        pageName={"Tour Grid"}
        search={true}
      />

      {/* <RoutePlanner /> */}
      {/* Tour Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container">
          <div className="shop-shorter rel z-3 mb-20">
            {place} {lat} {lon}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask AI..."
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={handleAiResponse}>Generate</button>
          </div>
          <hr className="mb-50" />

          {/* Show AI Loader while fetching data */}
          {aiLoading ? (
            <div className="loader-container">
              <AILoader />
            </div>
          ) : (
            <div className="row">
              {displayedItems.length > 0 ? (
                displayedItems.map((item, index) => {
                  const isGetRouteResponse =
                    item.hasOwnProperty("xid") && !item.hasOwnProperty("properties");
                  const itemData = isGetRouteResponse ? item : item.properties;

                  return (
                    <div className="col-xl-4 col-md-6" key={index}>
                      <div
                        className="destination-item tour-grid style-three bgc-lighter"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                      >
                        <div className="image">
                          <a href="#" className="heart">
                            <i className="fas fa-heart" />
                          </a>
                          <img
                            src="assets/images/destinations/tour-list1.jpg"
                            alt="Tour List"
                          />
                        </div>
                        <div className="content">
                          <div className="destination-header">
                            <span className="location">
                              <i className="fal fa-map-marker-alt" />
                            </span>
                            <div className="rating">
                              Rating - {itemData?.rate ?? 0}
                            </div>
                          </div>
                          <h5>
                            <Link
                              href={`https://www.wikidata.org/wiki/${itemData?.xid}`}
                              target="__blank"
                            >
                              {itemData?.name}
                            </Link>
                          </h5>
                          <p>
                            Tags:
                            {itemData?.kinds?.split(",").map((kind, idx) => (
                              <ul key={idx}>
                                <li>{kind}</li>
                              </ul>
                            ))}
                          </p>
                          {/* <div className="destination-footer">
                            <span className="price">
                              <span>$58.00</span>/person
                            </span>
                            <Link
                              href="tour-details"
                              className="theme-btn style-two style-three"
                            >
                              <span data-hover="Book Now">Book Now</span>
                              <i className="fal fa-arrow-right" />
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No routes available</p>
              )}

              {route.length > show && (
                <button
                  onClick={handleLoadMore}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "20px",
                    transition: "background-color 0.3s",
                  }}
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <Subscribe />
    </ReveloLayout></div>}
    
  </>
  );
};

export default Page;
