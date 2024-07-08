import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({
  availableTimes,
  setAvailableTimes,
  isBooked,
  setIsBooked,
  bookingInfo,
  setBookingInfo,
}) => {
  const [isLoading, setIsloading] = useState(false);

  const [bookingList, setBookingList] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    setTimeout(() => {
      setIsBooked(true);
      setBookingList((prevList) => [...prevList, bookingInfo]);
      console.log(bookingInfo)
      console.log(bookingList)
      setBookingInfo({
        date: "",
        time: 0,
        members: 0,
        occasion: "",
      });
      setIsloading(false);
    }, 2000);
  };
  return (
    <>
      <form onSubmit={handleBookingSubmit}>
        <label>
          Choose date:{" "}
          <input
            type="date"
            name="date"
            value={bookingInfo.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Choose time:{" "}
          <select
            id="res-time "
            name="time"
            value={bookingInfo.time}
            onChange={handleInputChange}
            required
          >
            <option></option>
            {availableTimes?.map((time, index) => (
              <option key={index}>{time}:00</option>
            ))}
          </select>
        </label>
        <label>
          Number of guests:{" "}
          <input
            type="number"
            name="members"
            value={bookingInfo.members}
            onChange={handleInputChange}
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
          />
        </label>
        <label>
          Occasion:{" "}
          <select
            id="occasion"
            name="occasion"
            value={bookingInfo.occasion}
            onChange={handleInputChange}
            required
          >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </label>
        <button className="submitBtn" type="submit">
          {!isLoading ? "Make your reservation" : "loading..."}
        </button>
      </form>
    </>
  );
};

export default BookingForm;
