import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ice3.jpg"
              text="Experience the geysers bubbling and shooting into the air in Southern Iceland"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/italy3.jpg"
              text="Lose yourself in the classical streets of Palermo"
              label="Romance"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/hyte3.jpg"
              text="Party all night in the wild clubs of Berlin's east side"
              label="Night Life"
              path="/services"
            />
            <CardItem
              src="images/rainbowmtn1.jpg"
              text="Find marvelous landscapes above 5000 meters at Rainbow Mountain in Peru"
              label="Beauty"
              path="/services"
            />
            <CardItem
              src="images/poland1.jpg"
              text="Explore the ancient castles of Poland"
              label="History"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
