import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import News from '../components/News';
import { getNews } from '../actions/newsActions';
import categoriesArr from '../constants/categories';
import countryList from '../constants/countryList';

const CategorySingleScreen = ({ match, history }) => {
  const { category } = match.params;
  const validCategory = categoriesArr.includes(category);

  const dispatch = useDispatch();

  const { news, language } = useSelector(state => ({
    news: state.news,
    language: state.language,
  }));
  const { loading, articles, error } = news;
  const { country } = language;

  useEffect(() => {
    if (validCategory) {
      dispatch(getNews(category));
    }
    return () => {};
  }, [dispatch, country]);

  if (!validCategory) {
    return (
      <>
        <h1>Sorry category {category} does not exist</h1>
        <Button className="btn btn-light my-3" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </>
    );
  }

  return (
    <>
      <h1>
        Top {category} news from {countryList[country]}
      </h1>
      <News news={articles} loading={loading} error={error} />
    </>
  );
};

export default CategorySingleScreen;
