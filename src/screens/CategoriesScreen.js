import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ArticleListItem from '../components/ArticleListItem';
import { getCategory } from '../actions/categoriesListActions';
import categoriesArr from '../constants/categories';

const CategoriesScreen = () => {
  const dispatch = useDispatch();

  const { categoryObj, language } = useSelector(state => ({
    categoryObj: state.category,
    language: state.language,
  }));
  const { country } = language;

  useEffect(() => {
    categoriesArr.forEach(category => dispatch(getCategory(category)));
    return () => {};
  }, [dispatch, country]);

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
        <h1>Top 5 news by categories from {country.toUpperCase()}</h1>
      </div>
      {categoriesArr.map(category => (
        <div key={category} className="py-3">
          <p>
            <Link
              to={`Categories/${category}`}
              className="pr-2 font-weight-bold text-uppercase"
            >
              {category}
            </Link>
            <Button
              className="btn btn-light px-2"
              onClick={closeOpenHandler(category)}
            >
              {state[category] ? 'close' : 'open'}
            </Button>
          </p>
          {state[category] && (
            <ArticleListItem
              categoryIndex={stateIndex[category]}
              changeSlide={changeSlide}
              category={category}
              categoryObj={categoryObj}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default CategoriesScreen;
