// import React from "react";
// import { Link } from "react-router-dom";
// import "./Card.css";

// const Card = ({ image, name, price, description, productId }) => {
//   console.log(productId);
//   return (
//     <div className="card">
//       <img src={image} alt={name} />
//       <h3>Name: {name}</h3>
//       <p>Price: $ {price}</p>
//       <p>Description: {description}</p>

//       <Link to={`/product/${productId}`}>
//         <button className="btn-view-more">View More</button>
//       </Link>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, name, price, description, productId, cardsPerRow }) => {
  return (
    <div className="card">
      <div key={productId} className="card-img">
        <div className="img">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="card-title">{name}</div>
      <div className="card-subtitle">{description}</div>
      <hr className="card-divider" />
      <div className="card-footer">
        <div className="card-price">
          <span className="card-price-sign">$</span> {price}
        </div>
      </div>

      <div className="button-container">
        <Link to={`/product/${productId}`}>
          <button className="button2">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
