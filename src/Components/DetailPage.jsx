import React, { useState, useRef } from "react";
import "./DetailPage.css";
import Modal from "./Modal";
import { useParams, useLocation } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../assets/FirebaseConfig";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const item = location.state;

  const checkinRef = useRef();
  const checkoutRef = useRef();
  const guestRef = useRef();
  const emailRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Getting input values
    const booking = {
      Checkin: checkinRef.current.value,
      CheckOut: checkoutRef.current.value,
      Guest: guestRef.current.value,
      Email: emailRef.current.value,
      Status: "pending",
      hotelName: item.hotelName
    };

    if (!booking.Checkin || !booking.CheckOut || !booking.Guest || !booking.Email) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "Bookings"), booking);
      console.log("Booking added with ID:", docRef.id);
      
      // Clear inputs after successful booking
      checkinRef.current.value = "";
      checkoutRef.current.value = "";
      guestRef.current.value = "";
      emailRef.current.value = "";

      alert("Booking successful!");

      closeModal(); // Close modal after submission
    } catch (error) {
      console.error("Error adding booking:", error.message);
    }
  };

  return (
    <>
      <div className="details">
        <div className="image">
          <img src={item.image} alt={item.hotelName} />
        </div>

        <div className="description">
          <h2>{item.hotelName}</h2>
          <p>{item.Description}</p>
          <span>{item.pricePerNight}</span>
          <button onClick={openModal}>Book Now</button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="form">
          <img style={{ width: "200px" }} src={item.image} alt="" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="checkin">Check-In</label>
            <input id="checkin" type="date" ref={checkinRef} />

            <label htmlFor="checkout">Check-Out</label>
            <input id="checkout" type="date" ref={checkoutRef} />

            <label htmlFor="guest">Guests</label>
            <input id="guest" type="number" ref={guestRef} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />

            <button type="submit">Proceed</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default DetailPage;
