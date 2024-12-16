import React from 'react';
import './SuggestedItems.css';

const SuggestedItems = ({ items }) => {
  // exclude the first item by filtering items with id > 1
  const filteredItems = items.filter(item => item.id !== 1);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={`full-${i}`} className="star filled">★</span>
          ))}
        {hasHalfStar && <span className="star half">★</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={`empty-${i}`} className="star empty">☆</span>
          ))}
      </div>
    );
  };

  return (
    <div className="suggested-items-container">
      <button className="carousel-button">❮</button>
      <div className="suggested-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="suggested-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            {renderStars(item.rating)}
          </div>
        ))}
      </div>
      <button className="carousel-button">❯</button>
    </div>
  );
};

export default SuggestedItems;
