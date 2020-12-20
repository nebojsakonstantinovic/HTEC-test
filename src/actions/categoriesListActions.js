import axios from 'axios';
import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from '../constants/categoriesListConstants';
import API_KEY from '../constants/API_KEY';

export const getCategory = (category = null, pageSize = 5) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
      category,
    });
    const { country } = getState().language;
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );

    let { articles } = data;
    articles = articles.map((article, index) => ({
      ...article,
      id: `${article.publishedAt}${index}`,
    }));
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: articles,
      category,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      category,
    });
  }
};
