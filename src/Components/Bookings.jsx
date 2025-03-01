import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../assets/FirebaseConfig";
import { Table } from "react-bootstrap";
import './Bookings.css';
const Bookings = () => {
  const [Bookings, setBookings] = useState([]);

 
  const storedEmail = localStorage.getItem("emailiD");
  const EmailID = storedEmail ? storedEmail.split("@")[0] : null;
  console.log("Filtered Email:", EmailID);

  useEffect(() => {
    const BookingCollection = collection(db, "Bookings");
    const unsubscribe = onSnapshot(BookingCollection, (snapshot) => {
      const BookingList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(BookingList);
    });

    return () => unsubscribe();
  }, []);

  
  const filteredBookings = Bookings.filter(
    (item) => item.Email && item.Email.split("@")[0] === EmailID
  );

  console.log("Filtered Bookings:", filteredBookings);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Hotel Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((item) => (
           
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Email}</td>
              <td>{item.hotelName}</td>
              <td>{item.Checkin}</td>
              <td>{item.CheckOut}</td>
              <td style={{backgroundColor: item.Status==="confirmed" ? "green" : "red"}}>{item.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;
