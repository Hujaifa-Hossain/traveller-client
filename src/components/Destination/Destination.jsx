import React from "react";
import "./Destination.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleDestination from "../SingleDestination/SingleDestination";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addDestination")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div>
      <h3 className="text-center my-3">Explore {destinations.length} Best Destination</h3>
      <div className="destinations-container">
        {destinations.map((destination) => (
          <SingleDestination
            key={destination._id}
            destination={destination}
          ></SingleDestination>
        ))}
      </div>
    </div>
  );
};

export default Destination;
