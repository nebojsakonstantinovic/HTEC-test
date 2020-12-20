import { SET_SEARCH } from '../constants/searchConstants';

export const searchReducer = (state = { find: '' }, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { find: action.payload };
    default:
      return state;
  }
};
