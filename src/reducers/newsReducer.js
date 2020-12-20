import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAIL,
} from '../constants/newsConstants';

export const newsReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return { loading: true, articles: [] };
    case NEWS_SUCCESS:
      return { loading: false, articles: action.payload };
    case NEWS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
