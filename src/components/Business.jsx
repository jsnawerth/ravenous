import React from "react";
import "./Business.css";

export default function Business({ imageSrc, name, address, city, state, zipCode, category, rating, reviewCount }) {
  return (
    <div className='business'>
      <div className='imageContainer'>
        <img src={imageSrc} />
      </div>

      <h2>{name}</h2>
      <figcaption className='businessInfo'>
        <div className='businessAddress'>
          <p>{address}</p>
          <p>{city}</p>
          <p>
            {state} {zipCode}
          </p>
        </div>
        <div className='businessReviews'>
          <h3>{category}</h3>
          <h3 className='rating'>{rating} stars</h3>
          <p>{reviewCount}</p>
        </div>
      </figcaption>
    </div>
  );
}
