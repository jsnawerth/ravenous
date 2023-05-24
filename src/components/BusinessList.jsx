import React from "react";
import Business from "./Business";
import "./BusinessList.css";

export default function BusinessList({ businessData }) {
  if (businessData) {
    return (
      <div className='businessList container'>
        {businessData.map((business) => (
          <Business
            key={business.id}
            imageSrc={business.imageSrc}
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
          />
        ))}
      </div>
    );
  } else if (!businessData) {
    return <h2 className='noResults'>No results found, try again.</h2>;
  }
}
