import React, { useReducer, useState, useContext, useEffect } from "react";
import "./BookingPage.css";
import BookingForm from "../../Components/BookingForm/BookingForm";

const BookingPage = () => {

  // If isBooked is true then it opens dialog box
  const [isBooked, setIsBooked] = useState(false);

  // Intializing booking info and being sent to BookingForm as prop
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    time: 0,
    members: 0,
    occasion: "",
  });

  // If user books more than one booking the data will store in this array
  const [bookingList, setBookingList] = useState([]);

  // Getting last element from the BookingList to it in the dialog box
  const lastElement = bookingList.length - 1;

  // Giving available times through this array as options using map method
  const [availableTimes, setAvailableTimes] = useState([
    17, 18, 19, 20, 21, 22,
  ]);
  return (
    <>
      <div className="bookingContainer">
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          isBooked={isBooked}
          setIsBooked={setIsBooked}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
          bookingList={bookingList}
          setBookingList={setBookingList}
        />
        {isBooked && (
          <div className="dialogBox">
            <h2>Success!</h2>
            <p>
              Confirmed table booking for {bookingList[lastElement]?.members}{" "}
              members on{" "}{bookingList[lastElement]?.date} at{" "}
              {bookingList[lastElement]?.time} for{" "}
              {bookingList[lastElement]?.occasion}{" "}party
            </p>
            <button onClick={() => setIsBooked(false)}>Done</button>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingPage;
