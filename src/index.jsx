import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles/index.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import jobResultsReducer from './reducers/jobResultsReducer';

const store = createStore(jobResultsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
