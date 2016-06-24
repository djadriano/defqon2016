import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AppStyle from '../stylesheets/app';

import LayoutApp from './pages/layout';
import HomePage from './pages/home';

const app = document.getElementById('defqon');

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={LayoutApp}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
), app);
