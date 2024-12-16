import React, { useState, useEffect } from 'react';
import Header from './Main/Header'; // Correct import path for Header
import Footer from './Main/Footer'; // Correct import path for Footer
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Initial state is an empty array

  useEffect(() => {
    fetch('http://127.0.0.1:5000/cart') // Call the backend cart API
      .then((response) => response.json())
      .then((data) => {
        console.log('Cart data fetched:', data); // Log the entire response
        if (Array.isArray(data)) {
          setCartItems(data); // Set cart items directly if it's an array
        } else {
          console.error('Unexpected data format for cart:', data);
        }
      })
      .catch((error) => console.error('Error fetching cart items:', error));
  }, []);

  const handleClearCart = () => {
    fetch('http://127.0.0.1:5000/cart', {
      method: 'DELETE',
    })
      .then(() => setCartItems([])) // Clear the local cart items
      .catch((error) => console.error('Error clearing cart:', error));
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p>Price: ${item.price ? item.price.toFixed(2) : 'N/A'}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className="clear-cart-button">
            Clear Cart
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
