import React from 'react';
import News from '../components/News';
import news from '../news';

const CategorySingleScreen = ({ match }) => {
  const { category } = match.params;

  // if (condition) {
  //   return <div>Sorry this category does not exist</div>;
  // }

  return (
    <>
      <h1>Top {category} news</h1>
      <News news={news} />
    </>
  );
};

export default CategorySingleScreen;
