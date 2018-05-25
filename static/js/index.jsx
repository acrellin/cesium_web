import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainContent from './containers/Main';
import { store } from './components/Main';
import configureStore from './configureStore';


ReactDOM.render(
  <Provider store={store}>
    <MainContent root={window.location.host + window.location.pathname} />
  </Provider>,
  document.getElementById('content')
);
