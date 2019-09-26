import * as React from 'react';
import styled from 'styled-components';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import LandingPage from './components/LandingPage';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
 </Router>
)
