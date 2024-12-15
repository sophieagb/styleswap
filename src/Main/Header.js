import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">STYLE SWAP</h1>
      <div className="icon-wrapper">
        <img src="/images/shop.png" alt="Cart Icon" className="icon" />
      </div>
    </header>
  );
};

export default Header;
