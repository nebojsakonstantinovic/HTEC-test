import React from 'react';
import News from '../components/News';
import news from '../news';

const HomeScreen = () => {
  return (
    <>
      <h1>Top News</h1>
      <News news={news} />
    </>
  );
};

export default HomeScreen;
