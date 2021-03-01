import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));

serviceWorker.unregister();
