import React, { useState } from "react";
import "./HotelListings.css";
import { Link } from "react-router-dom";
import { Inventory } from "../assets/Inventory";

const HotelListings = ({ ListOfHotels}) => {



  return (
    <div className="hotel_Listings">
      {/* Map through filteredRating instead of filteredCategory */}
      {ListOfHotels.map((item) => (
        <Link to={`/${item.id}`} className="hotel" key={item.id} state={item}>
          <img src={item.Image} alt={item.Name} />
          <div className="hotel_description">
            <h2>{item.Name}</h2>
            <p>{item.Description}</p>
            <span style={{ color: "red" }}>{item.Price}</span>
          </div>
          <div className="button">
            <h2>
              {item.Rating}
              <span className="material-symbols-outlined">star_rate</span>
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HotelListings;
