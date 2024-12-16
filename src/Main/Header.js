import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ cartAnimate }) => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  // Trigger animation whenever cartAnimate changes to true
  useEffect(() => {
    if (cartAnimate) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500); // Animation lasts for 500ms
      return () => clearTimeout(timer);
    }
  }, [cartAnimate]);

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
          className={`icon ${animate ? 'animate' : ''}`} // Apply animation class conditionally
          onClick={handleCartClick}
        />
      </div>
    </header>
  );
};

export default Header;
