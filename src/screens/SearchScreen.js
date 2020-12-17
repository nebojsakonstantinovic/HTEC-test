import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import News from '../components/News';
import news from '../news';

const SearchScreen = () => {
  const [search, setSearch] = useState('');

  const searchHandler = () => {
    if (search) {
      console.log(search);
    }
  };

  return (
    <>
      <h1>Search top news</h1>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <Button variant="outline-success" onClick={searchHandler}>
          Search
        </Button>
      </Form>
      <News news={news} />
    </>
  );
};

export default SearchScreen;
