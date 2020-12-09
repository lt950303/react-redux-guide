import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import App from './app'

// 订阅 store 的变化

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
