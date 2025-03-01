
import "./HotelListings.css";
import { Link } from "react-router-dom";
import { Inventory } from "../assets/Inventory";
import React, { useState, useEffect } from "react";
  import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../assets/FirebaseConfig";
  import { useSelector ,useDispatch} from "react-redux";
  import { InventoryActions } from "../Components/Store";
const HotelListings = ({ filterRating,filterCategory,filterPrice}) => {
    const [minPrice, maxPrice] = filterPrice;
  
    const dispatch=useDispatch()
    
    
    useEffect(() => {
      const hotelsCollection = collection(db, "hotels");
      const unsubscribe = onSnapshot(hotelsCollection, (snapshot) => {
        const hotelList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(hotelList)
        dispatch(InventoryActions.updateInventory(hotelList))
       
      });
  
      return () => unsubscribe(); // Cleanup listener on unmount
      
    
    }, [dispatch ]);



  const HotelsList=useSelector(state=>state.Inventory.Inventory)
  console.log(HotelsList)

    const filteredHotels = HotelsList.filter((item) => {
      const categoryMatch = filterCategory
        ? item.Category.toLowerCase().includes(filterCategory.toLowerCase())
        : true;

      const ratingMatch = filterRating
        ? Number(item.Rating) >= Number(filterRating)
        : true;

      const priceMatch =
        Number(item.pricePerNight) >= minPrice && Number(item.pricePerNight) <= maxPrice;

        const Availability= item.Availability== true

      return categoryMatch && ratingMatch && priceMatch && Availability;
      
    });

  return (
    <div className="hotel_Listings">
      {filteredHotels.map((item) => (
        <Link to={`/${item.id}`} className="hotel" key={item.id} state={item}>
          <img src={item.image} alt={item.hotelName} />
          <div className="hotel_description">   
            <h2>{item.hotelName}</h2>
            <p>{item.Description}</p>
            <span style={{ color: "red" }}>{item.pricePerNight}</span>
          </div>
          <div className="button">
            <h2>
              {item.StarRating}
              <span className="material-symbols-outlined">star_rate</span>
            </h2>
            {/* <h2>{item.Availability}</h2> */}
            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HotelListings;
