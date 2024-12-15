import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import MainImage from './MainImage';
import SuggestedItems from './SuggestedItems';
import Actions from './Actions';
import Footer from './Footer';
import data from '../data.json';

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(data.items);
  }, []);

  const handleMainImageClick = () => {
    const mainProduct = data.items[0];
    navigate('/product-details', { state: mainProduct });
  };

  return (
    <>
      <Header />
      <div onClick={handleMainImageClick} style={{ cursor: 'pointer' }}>
        <MainImage image={data.items[0].image} />
      </div>      <Actions />
      <SuggestedItems items={items} />
      <Footer />
    </>
  );
};

export default Home;
