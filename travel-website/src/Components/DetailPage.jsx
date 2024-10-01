import React, { useState } from "react";
import "./DetailPage.css";
import Modal from "./Modal";
import {useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";

const DetailPage = () => {
const id=useParams()
console.log(id)
const Location=useLocation()
const item=Location.state

    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };



  return (
    <>
     <div className="details">
      <div className="image">
        <img
          src={item.Image}
        />
      </div>
      

      <div className="description">
        <h2>{item.Name}</h2>
        <p>{item.Description}
        </p>
        <span>{item.Price}</span>
        <button onClick={openModal}>Book Now</button>
      </div>
    </div>
    
   <Modal  isOpen={isModalOpen} closeModal={closeModal}>
   <div className='form'>
    <img style={{width:"200px"}} src={item.Image} alt="" />
            <form action="">
                <label htmlFor="checkin">CheckIn</label>
                <input id='checkin' type="date" />
                <label htmlFor="checkout">Check Out</label>
                <input id='checkout' type="date" />
                <label htmlFor="guest">Guests</label>
                <input id='checkin' type="number" />
                <label htmlFor="Address">Address</label>
                <input id='checkin' type="text" />
                <button>Proceed</button>
            </form>
        </div>
   </Modal>
    </>
 
  );
};

export default DetailPage;
