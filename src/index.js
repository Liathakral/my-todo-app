import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from '../src/redux/store'; // Assuming your Redux store is configured in store.js or index.js

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Import Provider from react-redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
