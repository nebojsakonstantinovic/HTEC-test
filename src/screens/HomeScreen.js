import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import News from '../components/News';
import { getNews } from '../actions/newsActions';
import countryList from '../constants/countryList';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { news, language } = useSelector(state => ({
    news: state.news,
    language: state.language,
  }));
  const { loading, articles, error } = news;
  const { country } = language;

  useEffect(() => {
    dispatch(getNews());
    return () => {};
  }, [dispatch, country]);

  return (
    <>
      <h1>Top News from {countryList[country]}</h1>
      <News news={articles} loading={loading} error={error} />
    </>
  );
};

export default HomeScreen;
