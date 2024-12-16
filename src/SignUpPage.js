import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = ({ onSignUp }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (fullName && email && password) {
      onSignUp({ fullName, email });
      alert('Sign-Up Successful!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-container">
      <Link to="/" className="back-arrow">←</Link>
      <h1 className="title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignUp}>
        <label htmlFor="fullName" className="label">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="input"
          required
        />

        <label htmlFor="email" className="label">Columbia/Barnard Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input"
          required
        />

        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
          required
        />

        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
