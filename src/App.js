import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import Home from './Main/Home';
import ProductDetails from './ProductDetails';
import ChatPage from './ChatPage';
import ChatDetail from './ChatDetails';


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignUp = (user) => {
    console.log('User Signed Up:', user);
    alert(`Welcome, ${user.fullName}! Your account has been created.`);
  };

  const handleSignIn = (credentials) => {
    if (credentials.email && credentials.password) {
      setIsAuthenticated(true);
      alert(`Welcome back!`);
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage onSignUp={handleSignUp} />} />
        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <SignInPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:chatId" element={<ChatDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
