import React, { useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import News from '../components/News';
import { getNews } from '../actions/newsActions';
import { setSearch } from '../actions/searchActions';
import countryList from '../constants/countryList';

const SearchScreen = () => {
  const dispatch = useDispatch();

  const { news, language, search } = useSelector(state => ({
    news: state.news,
    language: state.language,
    search: state.search.find,
  }));
  const { loading, articles, error } = news;
  const { country } = language;

  useEffect(() => {
    dispatch(getNews(null, search));
    return () => {};
  }, [dispatch, country]);

  const searchHandler = e => {
    dispatch(getNews(null, search));
    e.preventDefault();
  };

  const find = e => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <h1>Search top news from {countryList[country]} by term</h1>
      <Form
        inline
        onSubmit={searchHandler}
        className="d-sm-flex justify-content-center mb-2"
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 mb-2 mb-sm-0"
          value={search}
          onChange={find}
        />
        <Button
          variant="outline-dark"
          className="w-100 w-sm-auto"
          onClick={searchHandler}
        >
          Search
        </Button>
      </Form>
      <News news={articles} loading={loading} error={error} />
    </>
  );
};

export default SearchScreen;
