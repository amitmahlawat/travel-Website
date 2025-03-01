import Filters from "./Components/Filters";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HotelListings from "./Components/HotelListings";
import Searchbox from "./Components/Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./Components/DetailPage";
import {useState } from "react";
import LoginPage from "./Components/LoginPage";
import { useSelector } from "react-redux";
import Bookings from "./Components/Bookings";

function App() {
  const [filterPrice, setFilterPrice] = useState([0,5000]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const isLogin = useSelector((state) => state.authentication.loginStatus);
 

  
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Searchbox />
              <div className="main-content">
                { isLogin &&<Filters
                  setFilterPrice={setFilterPrice}
                  setFilterCategory={setFilterCategory}
                  setFilterRating={setFilterRating}
                  filterPrice={filterPrice}
                />}
                {isLogin && <HotelListings
                  filterRating={filterRating}
                  filterCategory={filterCategory}
                  filterPrice={filterPrice}
                />}
              </div>
            </div>
          }
        />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
