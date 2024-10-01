import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Booking.com</h1>
      <input type="text" placeholder="Search Your Favourite Hotel"></input>
      <div className="nav_items">
        <h5>List your Property</h5>
        <h5>Support</h5>
        <h5>Trips</h5>
        <h5>Sign In</h5>
      </div>
      <div className="user">
        <span class="material-symbols-outlined">person</span>
      </div>
    </div>
  );
};

export default Header;

