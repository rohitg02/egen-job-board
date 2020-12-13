import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles/index.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

import searchBarReducer from './reducers/searchBarReducer';
import jobResultsReducer from './reducers/jobResultsReducer';

const reducers = combineReducers({searchBarReducer, jobResultsReducer})
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
