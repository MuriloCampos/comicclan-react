import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
