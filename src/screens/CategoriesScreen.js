import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleListItem from '../components/ArticleListItem';

const CategoriesScreen = () => {
  const categoriesArr = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  const [state, setState] = useState({
    business: true,
    entertainment: true,
    general: true,
    health: true,
    science: true,
    sports: true,
    technology: true,
  });

  const [stateIndex, setStateIndex] = useState({
    business: 0,
    entertainment: 0,
    general: 0,
    health: 0,
    science: 0,
    sports: 0,
    technology: 0,
  });

  const closeOpenHandler = category => () => {
    setState({ ...state, [category]: !state[category] });
  };

  const changeSlide = (category, change) => () => {
    if (
      (stateIndex[category] < 4 && change > 0) ||
      (stateIndex[category] > 0 && change < 0)
    ) {
      setStateIndex(prevStateIndex => ({
        ...prevStateIndex,
        [category]: prevStateIndex[category] + change,
      }));
    }
  };

  return (
    <>
      <div>
        <h1>Top 5 news by categories</h1>
      </div>
      {categoriesArr.map(category => (
        <div key={category} className="py-3">
          <p>
            <Link to={`Categories/${category}`} className="pr-2">
              {category}
            </Link>
            <span
              className="btn btn-light px-2"
              onClick={closeOpenHandler(category)}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              {state[category] ? 'close' : 'open'}
            </span>
          </p>

          {state[category] && (
            <ArticleListItem
              categoryIndex={stateIndex[category]}
              changeSlide={changeSlide}
              category={category}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default CategoriesScreen;
