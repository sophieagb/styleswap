import React, { useState, useEffect } from 'react';
import Footer from './Main/Footer'; // Correct import path
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items and restore selected options from localStorage
  useEffect(() => {
    fetch('http://127.0.0.1:5000/cart')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const savedOptions = JSON.parse(localStorage.getItem('cartOptions')) || {};
          const updatedItems = data.map((item) => ({
            ...item,
            option: savedOptions[item.id] || 'Purchase',
          }));
          setCartItems(updatedItems);
        } else {
          console.error('Unexpected data format for cart:', data);
        }
      })
      .catch((error) => console.error('Error fetching cart items:', error));
  }, []);

  const handleOptionChange = (id, newOption) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, option: newOption } : item
      );
      const cartOptions = updatedItems.reduce((acc, item) => {
        acc[item.id] = item.option;
        return acc;
      }, {});
      localStorage.setItem('cartOptions', JSON.stringify(cartOptions));
      return updatedItems;
    });
  };

  const handleDeleteItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    fetch('http://127.0.0.1:5000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: itemId, delete: true }),
    }).catch((error) => console.error('Error deleting item:', error));
  };

  const handleClearCart = () => {
    fetch('http://127.0.0.1:5000/cart', { method: 'DELETE' })
      .then(() => {
        setCartItems([]);
        localStorage.removeItem('cartOptions');
      })
      .catch((error) => console.error('Error clearing cart:', error));
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">STYLE SWAP</h1>
        <img src="/images/shop.png" alt="Cart Icon" className="cart-icon-large" />
      </div>

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
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-price-option">
                  <select
                    className="cart-dropdown"
                    value={item.option}
                    onChange={(e) => handleOptionChange(item.id, e.target.value)}
                  >
                    <option value="Purchase">Purchase</option>
                    <option value="Rent">Rent</option>
                    <option value="Swap">Swap</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className="cart-buttons">
            <button onClick={handleClearCart} className="clear-cart-button">
              Clear Cart
            </button>
            <button
              className="checkout-button"
              onClick={() => alert('Checkout functionality not implemented yet.')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
