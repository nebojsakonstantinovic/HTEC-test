import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newsReducer } from './reducers/newsReducer';
import { languageReducer } from './reducers/languageReducer';
import { categoriesReducer } from './reducers/categoriesListReducer';
import { searchReducer } from './reducers/searchReducer';

const reducer = combineReducers({
  news: newsReducer,
  language: languageReducer,
  category: categoriesReducer,
  search: searchReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
