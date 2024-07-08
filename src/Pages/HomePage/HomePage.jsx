import React from "react";
import "./HomePage.css";
import HomePageCard from "../../Components/HomePageCard/HomePageCard";
import { Link } from "react-router-dom";

const CardData = [
  {
      imgUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      itemTitle: "salad",
      itemPrice: 2.99,
      itemDescription: "This is something about this food which has certain ingredeints and i know, ingredeints spelling is wrong. I am very weak to remember spellings."
  },
  {
      imgUrl: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      itemTitle: "Pan Cake",
      itemPrice: 2.99,
      itemDescription: "This is something about this food which has certain ingredeints and i know, ingredeints spelling is wrong. I am very weak to remember spellings."
  },
  {
      imgUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
      itemTitle: "Noodles",
      itemPrice: 2.99,
      itemDescription: "This is something about this food which has certain ingredeints and i know, ingredeints spelling is wrong. I am very weak to remember spellings."
  }
]

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="homepage">

          {/* Little lemon banner  */}
          <div className="text">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, maiores.
            </p>
            <Link to="/booking" className="orderButton">Reserve Table</Link>
          </div>

          {/* Little lemon banner image  */}
          <div className="img">
            <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="little-lemon" />
          </div>
        </div>

        {/* Chef's special text  */}
        <div className="homePageText">
          <h2>Chef's Special</h2>
          <button className="orderButton">Order now</button>
        </div>

        {/* HomePage card  */}
        <div className="card">
          {CardData.map((item, index) => (
            <HomePageCard key={index} imgUrl={item.imgUrl} itemTitle={item.itemTitle} itemPrice={item.itemPrice} itemDescription={item.itemDescription}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
