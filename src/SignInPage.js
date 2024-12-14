import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css'; // Include styling here

const SignInPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsAuthenticated(true); 
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="signin-container">
      <button className="back-button" onClick={() => navigate('/')}>←</button> {/* Back to Landing */}
      <h1 className="title">Sign In</h1>
      <form className="signin-form" onSubmit={handleSignIn}>
        <label className="input-label" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="input-label" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;