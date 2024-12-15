import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <img src="/images/home.png" alt="Home" className="active" />
      </div>
      <div className="footer-icon">
        <img src="/images/search.png" alt="Search" />
      </div>
      <div className="footer-icon">
        <img src="/images/chat.png" alt="Chat" />
      </div>
      <div className="footer-icon">
        <img src="/images/profile.png" alt="Profile" />
      </div>
    </footer>
  );
};

export default Footer;
