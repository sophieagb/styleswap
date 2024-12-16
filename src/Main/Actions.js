import React from 'react';
import './Actions.css';

const Actions = ({ onNextImage, onAddToCart }) => {
  return (
    <div className="actions-container">
      <img
        src="/images/action1.png"
        alt="Next Image"
        className="action-icon"
        onClick={onNextImage}
      />
      <img
        src="/images/action2.png"
        alt="Add to Cart"
        className="action-icon"
        onClick={() => {
          console.log('Add to Cart clicked');
          onAddToCart();
        }}
      />
      <img
        src="/images/action3.png"
        alt="Favorite"
        className="action-icon"
      />
    </div>
  );
};

export default Actions;
