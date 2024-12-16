import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Actions from './Actions';
import SuggestedItems from './SuggestedItems';
import Footer from './Footer';
import shoppingHomeData from '../ShoppingHome.json'; // Import big images
import data from '../data.json'; // Import for SuggestedItems

const Home = () => {
  const [bigImages, setBigImages] = useState([]); // State for big images
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks current big image index
  const [suggestedItems, setSuggestedItems] = useState([]); // Suggested items
  const [cartAnimate, setCartAnimate] = useState(false); // State to trigger cart animation
  const navigate = useNavigate();

  // Load images and suggested items on initial render
  useEffect(() => {
    setBigImages(shoppingHomeData.images); // Load big images
    setSuggestedItems(data.items); // Load suggested items
  }, []);

  // Restore currentIndex from localStorage after images are loaded
  useEffect(() => {
    if (bigImages.length > 0) {
      const savedIndex = localStorage.getItem('currentIndex');
      if (savedIndex !== null) {
        const index = parseInt(savedIndex, 10);
        if (index >= 0 && index < bigImages.length) {
          setCurrentIndex(index);
        }
      }
    }
  }, [bigImages]);

  // Save currentIndex to localStorage
  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex);
  }, [currentIndex]);

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
  const handleAddToCart = () => {
    const currentProduct = bigImages[currentIndex];
    console.log('Adding to cart:', currentProduct);

    fetch('http://127.0.0.1:5000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: currentProduct.id,
        name: currentProduct.title,
        price: currentProduct.price,
        image: currentProduct.image,
        size: currentProduct.size,
        color: currentProduct.color,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setCartAnimate(true); // Trigger cart animation
        setTimeout(() => setCartAnimate(false), 500);
        handleNextImage(); // Move to the next image
      })
      .catch((error) => console.error('Error adding to cart:', error));
  };

  return (
    <>
      <Header cartAnimate={cartAnimate} currentIndex={currentIndex} />
      {/* Main Image Section */}
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
              src={bigImages[currentIndex]?.image}
              alt={`Image ${bigImages[currentIndex]?.id}`}
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
      <SuggestedItems items={suggestedItems} />
      <Footer />
    </>
  );
};

export default Home;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Actions from './Actions';
// import SuggestedItems from './SuggestedItems';
// import Footer from './Footer';
// import shoppingHomeData from '../ShoppingHome.json'; // Import big images
// import data from '../data.json'; // Import for SuggestedItems

// const Home = () => {
//   const [bigImages, setBigImages] = useState([]); // State for big images
//   const [currentIndex, setCurrentIndex] = useState(0); // Tracks current big image index
//   const [suggestedItems, setSuggestedItems] = useState([]); // Suggested items
//   const [cartAnimate, setCartAnimate] = useState(false); // State to trigger cart animation
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load big images and suggested items
//     setBigImages(shoppingHomeData.images);
//     setSuggestedItems(data.items);
//   }, []);

//   // Restore currentIndex after bigImages are loaded
//   useEffect(() => {
//     if (bigImages.length > 0) {
//       const savedIndex = localStorage.getItem('currentIndex');
//       if (savedIndex !== null && savedIndex < bigImages.length) {
//         setCurrentIndex(parseInt(savedIndex, 10));
//       }
//     }
//   }, [bigImages]); // Wait until bigImages are loaded

//   // Save the currentIndex to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('currentIndex', currentIndex);
//   }, [currentIndex]);

//   // Function to move to the next image
//   const handleNextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % bigImages.length);
//   };

//   // Function to handle clicking on the big image
//   const handleImageClick = () => {
//     const currentImage = bigImages[currentIndex];
//     navigate('/product-details', { state: currentImage });
//   };

//   // Function to handle adding the current item to the cart
//   const handleAddToCart = () => {
//     const currentProduct = bigImages[currentIndex];
//     console.log('Adding to cart:', currentProduct);

//     fetch('http://127.0.0.1:5000/cart', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         id: currentProduct.id,
//         name: currentProduct.title,
//         price: currentProduct.price,
//         image: currentProduct.image,
//         size: currentProduct.size,
//         color: currentProduct.color,
//       }),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         // Trigger cart icon animation
//         setCartAnimate(true);
//         setTimeout(() => setCartAnimate(false), 500); // Animation duration
//         handleNextImage(); // Automatically show the next image
//       })
//       .catch((error) => console.error('Error adding to cart:', error));
//   };

//   return (
//     <>
//       <Header cartAnimate={cartAnimate} />
//       {/* Centered Big Image Section */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '450px',
//           margin: '10px auto',
//         }}
//       >
//         <div
//           style={{
//             width: '350px',
//             height: '350px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#f0f0f0',
//             borderRadius: '10px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           }}
//           onClick={handleImageClick}
//         >
//           {bigImages.length > 0 && (
//             <img
//               src={bigImages[currentIndex]?.image}
//               alt={`Image ${bigImages[currentIndex]?.id}`}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 cursor: 'pointer',
//               }}
//             />
//           )}
//         </div>
//       </div>
//       {/* Actions Buttons Section */}
//       <Actions onNextImage={handleNextImage} onAddToCart={handleAddToCart} />
//       {/* Suggested Items Section */}
//       <SuggestedItems items={suggestedItems} />
//       <Footer />
//     </>
//   );
// };

// export default Home;
