import { SET_SEARCH } from '../constants/searchConstants';

export const setSearch = search => dispatch => {
  dispatch({
    type: SET_SEARCH,
    payload: search,
  });
};
