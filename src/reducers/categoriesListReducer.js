import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from '../constants/categoriesListConstants';

const initialState = {
  business: {
    articles: [],
    error: false,
    loading: false,
  },
  entertainment: {
    articles: [],
    error: false,
    loading: false,
  },
  general: {
    articles: [],
    error: false,
    loading: false,
  },
  health: {
    articles: [],
    error: false,
    loading: false,
  },
  science: {
    articles: [],
    error: false,
    loading: false,
  },
  sports: {
    articles: [],
    error: false,
    loading: false,
  },
  technology: {
    articles: [],
    error: false,
    loading: false,
  },
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          loading: true,
        },
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          articles: action.payload,
          loading: false,
        },
      };
    case CATEGORIES_FAIL:
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          error: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
