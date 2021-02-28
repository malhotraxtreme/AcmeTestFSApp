import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './state/deviceStore';

ReactDOM.render(
  <React.StrictMode>
    <DeviceStore>
      <App />
    </DeviceStore>
  </React.StrictMode>,
  document.getElementById('root')
);

