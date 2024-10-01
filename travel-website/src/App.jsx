import Filters from "./Components/Filters";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HotelListings from "./Components/HotelListings";
import Searchbox from "./Components/Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./Components/DetailPage";
import { useEffect, useState } from "react";
import { Inventory } from "./assets/Inventory";
function App() {
  const [filterPrice, setFilterPrice] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [ListOfHotels, setListOfHotels] = useState(Inventory ?? []);

  const handleFilterCategory = (value) => {
    console.log("value", value);
    setFilterCategory(value);
    const filteredCategory = Inventory.filter((item) =>
      item.Category.toLowerCase().includes(value.toLowerCase())
    );

    setListOfHotels(filteredCategory);
  };
  const handleFilterPrice = (value) => {
    console.log(ListOfHotels)
    setFilterPrice(value);
    const filteredPrice = filterCategory.filter((item) =>
      Number(item.Price?.split("$")?.[1]?.split("/")?.[0])>=Number(value)
    );

    console.log(filteredPrice)

    setListOfHotels(filteredPrice);
  };


  const handleFilterRating = (value) => {
    setFilterRating(value);
    const filteredRating = [...filterCategory].filter((item) => item.Rating === Number(value));
    setListOfHotels(filteredRating);
    console.log(filteredRating)
    console.log("value",value)
  };

  // useEffect(()=>{
  //   if(ListOfHotels?.length===0){
  //     setListOfHotels(Inventory)
  //   }
  // },[ListOfHotels])
  // console.log(filterPrice);
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
                <Filters
                  setFilterPrice={handleFilterPrice}
                  setFilterCategory={handleFilterCategory}
                  setFilterRating={handleFilterRating}
                  filterPrice={filterPrice}
                />
                <HotelListings
                  ListOfHotels={ListOfHotels}
                />
              </div>
            </div>
          }
        />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
