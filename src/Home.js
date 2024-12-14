import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainImage from './Main';
import SuggestedItems from './SuggestedItems';
import Actions from './Actions';
import data from './data.json';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.items); // Load items from mock JSON
  }, []);

  return (
    <>
      <Header />
      <MainImage image={data.items[0].image} />
      <Actions />
      <SuggestedItems items={items} />
    </>
  );
};

export default Home;
