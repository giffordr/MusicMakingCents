import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'

import States from './components/states/States';


ReactDOM.render((<Router history={createBrowserHistory()}>
  <States />
   </Router>),
  document.getElementById('reactapp'),
);
