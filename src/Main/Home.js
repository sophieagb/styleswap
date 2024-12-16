import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Actions from './Actions';
import SuggestedItems from './SuggestedItems';
import Footer from './Footer';
import shoppingHomeData from '../ShoppingHome.json'; // Import big images
import data from '../data.json'; // Import for SuggestedItems

const Home = () => {
  const [bigImages, setBigImages] = useState([]); // State for big images (from ShoppingHome.json)
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current big image index
  const [suggestedItems, setSuggestedItems] = useState([]); // State for SuggestedItems (from data.json)
  const navigate = useNavigate();

  useEffect(() => {
    // Load big images
    setBigImages(shoppingHomeData.images);
    // Load suggested items
    setSuggestedItems(data.items);
  }, []);

  // Function to move to the next image
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bigImages.length);
  };

  // Function to handle clicking on the big image
  const handleImageClick = () => {
    const currentImage = bigImages[currentIndex];
    navigate('/product-details', { state: currentImage });
  };

  // Function to handle adding the current item to the cart
  // Function to handle adding the current item to the cart
  const handleAddToCart = () => {
    const currentProduct = bigImages[currentIndex];
    console.log('Adding to cart:', currentProduct); // Network log

    fetch('http://127.0.0.1:5000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: currentProduct.id,
        name: currentProduct.title, // Use title from shoppingHome.json
        price: currentProduct.price,
        image: currentProduct.image,
        size: currentProduct.size,
        color: currentProduct.color,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Cart Updated:', data);
        alert('Item added to cart successfully!');
      })
      .catch((error) => console.error('Error adding to cart:', error));
  };


  return (
    <>
      <Header />
      {/* Centered Big Image Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '450px',
          margin: '10px auto',
        }}
      >
        <div
          style={{
            width: '350px',
            height: '350px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onClick={handleImageClick}
        >
          {bigImages.length > 0 && (
            <img
              src={bigImages[currentIndex].image}
              alt={`Image ${bigImages[currentIndex].id}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            />
          )}
        </div>
      </div>
      {/* Actions Buttons Section */}
      <Actions onNextImage={handleNextImage} onAddToCart={handleAddToCart} />
      {/* Suggested Items Section */}
      <SuggestedItems items={suggestedItems} /> {/* Uses data.json */}
      <Footer />
    </>
  );
};

export default Home;
