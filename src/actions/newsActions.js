import axios from 'axios';
import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAIL,
} from '../constants/newsConstants';
import API_KEY from '../constants/API_KEY';

export const getNews = (category = null, search = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: NEWS_REQUEST,
    });
    const { country } = getState().language;
    let data;
    if (category) {
      const result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
      );
      data = result.data;
    } else if (search) {
      const result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&q=${search}&apiKey=${API_KEY}`
      );
      data = result.data;
    } else {
      const result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
      );
      data = result.data;
    }
    let { articles } = data;
    articles = articles.map((article, index) => ({
      ...article,
      id: `${article.publishedAt}${index}`,
    }));
    dispatch({
      type: NEWS_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
