import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optional styles

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="title">STYLE SWAP</h1>
      <p className="subtitle">The Columbia/Barnard Clothing Exchange Platform</p>
      <div className="button-container">
        <Link to="/signin" className="button">Sign In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;