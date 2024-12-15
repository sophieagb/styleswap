import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/home" className="footer-icon">
        <img src="/images/home.png" alt="Home Icon" />
      </Link>
      <Link to="/search" className="footer-icon">
        <img src="/images/search.png" alt="Search Icon" />
      </Link>
      <Link to="/chat" className="footer-icon">
        <img src="/images/chat.png" alt="Chat Icon" />
      </Link>
      <Link to="/profile" className="footer-icon">
        <img src="/images/profile.png" alt="Profile Icon" />
      </Link>
    </footer>
  );
};

export default Footer;
