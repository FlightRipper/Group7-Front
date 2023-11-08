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
    <div className="card-abc">
      <div key={productId} className="card-img-abc">
        <div className="img-abc">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="card-title-abc">{name}</div>
      <div className="card-subtitle-abc">{description}</div>
      <hr className="card-divider-abc" />
      <div className="card-footer-abc">
        <div className="card-price-abc">
          <span className="card-price-sign-abc">$</span> {price}
        </div>
      </div>

      <div className="button-container-abc">
        <Link to={`/product/${productId}`}>
          <button className="button2-abc">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
