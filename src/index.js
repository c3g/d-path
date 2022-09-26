import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from './constants';

import App from './App';
import './stylesheets/style.css';


ReactDOM.render(
    <BrowserRouter basename={BASE_URL}>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App')

    ReactDOM.render(
        <BrowserRouter>
          <NextApp />
        </BrowserRouter>,
      document.getElementById('root')
    );
  })
}
