import React, { useState } from 'react'
import './Filters.css';
const Filters = ({setFilterCategory, setFilterRating,setFilterPrice,filterPrice}) => {

    const isNotZero=(value)=> value!==0 && value!==""
    const [price,setPrice]=useState(250);

    const handlePriceChange=(e)=>{
       const newPrice=e.target.value
        setPrice(newPrice)
        setFilterPrice([0,newPrice])
    }
    
  return (
    
        <div className="filter">
            <label htmlFor="categorySelect">Filter by Category: </label>
            <select id="categorySelect" onChange={(e)=>{setFilterCategory(e.target.value)}}>
            {/* <option value="Hotel" hidden>Select Category</option> */}
            <option value="">All</option>
                <option value="Hotel">Hotel</option>
                <option value="Motel">Motel</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="HouseBoat">House Boat</option>
            </select>
  <label htmlFor="priceRange">Filter by Price Range: </label>
  <div>
  <span id="priceValue">${price}</span>
  <input type="range" id="priceRange" name="priceRange" min="0" max="250" step="10" value={price} onChange={handlePriceChange}  />
  
  </div>
  <label htmlFor="categorySelect">Filter by Ratings: </label>
            <select id="categorySelect" onChange={(e)=>{setFilterRating(e.target.value)}}>
            <option value="" >All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
</div>  
      
    
  )
}

export default Filters
