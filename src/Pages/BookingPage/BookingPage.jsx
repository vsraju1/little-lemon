import React, { useReducer, useState } from "react";
import "./BookingPage.css";
import BookingForm from "../../Components/BookingForm/BookingForm";

const BookingPage = () => {
  const [isBooked, setIsBooked] = useState(false)
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    time: 0,
    members: 0,
    occasion: "",
  })
  const [availableTimes, setAvailableTimes] = useState([
    17, 18, 19, 20, 21, 22,
  ]);
  return (
    <>
      <div className="bookingContainer">
        {isBooked && <div className="dialogBox">
          <h2>Success!</h2>
          <p>Confirmed table booking for {bookingInfo.members} members on {bookingInfo.date} at {bookingInfo.time}:00 for {bookingInfo.occasion}</p>
          <button onClick={() => setIsBooked(false)}>Done</button>
        </div>}
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          isBooked={isBooked}
          setIsBooked={setIsBooked}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
        />
      </div>
    </>
  );
};

export default BookingPage;
