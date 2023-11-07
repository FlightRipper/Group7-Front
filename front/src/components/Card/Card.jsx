import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const AccessoryCard = ({ image, name, price, description, productId }) => {
  console.log(productId);
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>Name: {name}</h3>
      <p>Price: $ {price}</p>
      <p>Description: {description}</p>

      <Link to={`/product/${productId}`}>
        <button className="btn-view-more">View More</button>
      </Link>
    </div>
  );
};

export default AccessoryCard;
