import React from "react";
import "./HomePageCard.css";

const HomePageCard = ({ imgUrl, itemTitle, itemPrice, itemDescription }) => {
  return (
    <>
      <div className="homePageCard">
        <div className="img">
          <img src={imgUrl} alt={itemTitle} />
        </div>
        <div className="textDescription">
          <div className="textTop">
            <h4>{itemTitle}</h4>
            <p>${itemPrice}</p>
          </div>
          <p>{itemDescription}</p>
        </div>
        <button className="orderButton">Order now</button>
      </div>
    </>
  );
};

export default HomePageCard;
