import React from 'react';

const SuggestedItems = ({ items }) => (
  <div className="suggested-items">
    {items.map((item) => (
      <div key={item.id}>
        <img src={item.image} alt={item.name} />
        <div className="star-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} style={{ color: index < item.rating ? '#ffc107' : '#ddd' }}>
              &#9733;
            </span>
          ))}
        </div>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
    ))}
  </div>
);

export default SuggestedItems;
