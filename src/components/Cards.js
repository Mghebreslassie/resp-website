import React from "react"
import CardItem from "./CardItem"
import "./Cards.css"
import image9 from "../assets/images/img-9.jpg"
import image8 from "../assets/images/img-8.jpg"
import image7 from "../assets/images/img-7.jpg"
import image6 from "../assets/images/img-6.jpg"
import image5 from "../assets/images/img-5.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image9}
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="adventure"
              path="/services"
            />
            <CardItem
              src={image8}
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image7}
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="adventure"
              path="/services"
            />
            <CardItem
              src={image6}
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="adventure"
              path="/services"
            />
            <CardItem
              src={image5}
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
