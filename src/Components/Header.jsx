import React, { useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions } from "./Store";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authentication.loginStatus);
  const navigate = useNavigate();

  // Sync login status with localStorage on app load
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("loginStatus");
    if (storedLoginStatus === "true") {
      // You can dispatch an action to set the login status based on localStorage value if needed.
      dispatch(authenticationActions.Login());
    } else {
      dispatch(authenticationActions.Logout());
    }
  }, [dispatch]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authenticationActions.Logout()); // Update Redux state
    localStorage.setItem("loginStatus", "false"); // Sync with localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
        <h1>Booking.com</h1>
      </Link>
      <input type="text" placeholder="Search Your Favourite Hotel" />
      <div className="nav_items">
        <h5>List your Property</h5>
        <h5>Support</h5>
        {isLogin && <Link to={"/bookings"}>Bookings</Link>}
        {isLogin ? (
          <button
            onClick={handleLogout}
            style={{ textDecoration: "none", color: "black", background: "none", border: "none" }}
          >
            <h5>Sign Out</h5>
          </button>
        ) : (
          <Link style={{ textDecoration: "none", color: "black" }} to={"/login"}>
            <h5>Sign In</h5>
          </Link>
        )}
      </div>
      <div className="user">
        <span className="material-symbols-outlined">person</span>
      </div>
    </div>
  );
};

export default Header;
