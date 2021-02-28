import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import ContainerWrapper from './pages/containerWrapper/containerWrapper';
import { Provider } from 'react-redux';
import { store } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <ContainerWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

