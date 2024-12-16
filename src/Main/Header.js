import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  // Navigate to the Cart Page
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <h1 className="title">STYLE SWAP</h1>
      <div className="icon-wrapper">
        <img
          src="/images/shop.png"
          alt="Cart Icon"
          className="icon"
          onClick={handleCartClick} // Navigate to Cart Page
        />
      </div>
    </header>
  );
};

export default Header;
