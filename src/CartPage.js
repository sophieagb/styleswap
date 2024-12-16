import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the Flask backend
  useEffect(() => {
    fetch('/cart')
      .then(response => response.json())
      .then(data => setCartItems(data.cart))
      .catch(error => console.error('Error fetching cart data:', error));
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width="50" height="50" />
              <p>{item.name} - ${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
