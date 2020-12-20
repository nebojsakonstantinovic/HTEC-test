import {
  CHANGE_LANGUAGE,
  DISABLE_LANGUAGE_CHANGE,
} from '../constants/languageConstants';

export const languageReducer = (
  state = { country: 'us', disabled: false },
  action
) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, country: action.payload };
    case DISABLE_LANGUAGE_CHANGE:
      return { ...state, disabled: action.payload };
    default:
      return state;
  }
};
