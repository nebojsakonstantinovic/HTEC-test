import {
  CHANGE_LANGUAGE,
  DISABLE_LANGUAGE_CHANGE,
} from '../constants/languageConstants';

export const changeLanguage = language => async dispatch => {
  dispatch({
    type: CHANGE_LANGUAGE,
    payload: language,
  });
};

export const disableLanguageChange = bool => async dispatch => {
  dispatch({
    type: DISABLE_LANGUAGE_CHANGE,
    payload: bool,
  });
};
