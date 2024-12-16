import React, { useState, useEffect } from 'react';
import Footer from './Main/Footer'; // Correct import path for Footer
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the backend
  useEffect(() => {
    fetch('http://127.0.0.1:5000/cart')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          console.error('Unexpected data format for cart:', data);
        }
      })
      .catch((error) => console.error('Error fetching cart items:', error));
  }, []);

  // Function to delete a specific item
  const handleDeleteItem = (itemId) => {
    fetch('http://127.0.0.1:5000/cart', {
      method: 'POST', // Simulating item deletion
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: itemId, delete: true }),
    })
      .then(() => setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId)))
      .catch((error) => console.error('Error deleting item:', error));
  };

  // Function to clear the entire cart
  const handleClearCart = () => {
    fetch('http://127.0.0.1:5000/cart', { method: 'DELETE' })
      .then(() => setCartItems([]))
      .catch((error) => console.error('Error clearing cart:', error));
  };

  return (
    <div className="cart-page">
      {/* Custom Header */}
      <div className="cart-header">
        <h1 className="cart-title">STYLE SWAP</h1>
        <img src="/images/shop.png" alt="Cart Icon" className="cart-icon-large" />
      </div>

      {/* Cart Items */}
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <button
                  className="delete-button"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  ✕
                </button>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;
