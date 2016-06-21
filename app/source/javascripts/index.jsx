import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AppStyle from '../stylesheets/app';

import LayoutApp from './pages/layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SuccessPage from './pages/success';
import LoggedPage from './pages/logged';
import IpadPage from './pages/ipad';

const app = document.getElementById('nklck');

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={LayoutApp}>
      <IndexRoute component={HomePage} />
      <Route path="login" component={LoginPage} />
      <Route path="success" component={SuccessPage} />
      <Route path="logged" component={LoggedPage} />
      <Route path="ipad" component={IpadPage} />
    </Route>
  </Router>
), app);
