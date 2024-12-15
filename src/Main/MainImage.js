import React from 'react';
import './MainImage.css';

const MainImage = ({ image }) => {
  return (
    <div className="main-image-container">
      <img src={image} alt="Main Item" className="main-image" />
    </div>
  );
};

export default MainImage;