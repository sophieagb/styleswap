import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainImage from './MainImage';
import SuggestedItems from './SuggestedItems';
import Actions from './Actions';
import Footer from './Footer';
import data from '../data.json';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.items);
  }, []);

  return (
    <>
      <Header />
      <MainImage image={data.items[0].image} />
      <Actions />
      <SuggestedItems items={items} />
      <Footer />
    </>
  );
};

export default Home;
