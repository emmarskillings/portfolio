import * as React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import Portfolio from './components/Portfolio/Portfolio';
import Journal from './components/Journal';
import About from './components/About';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/journal/" component={Journal} />
      <Route exact path="/about-me/" component={About} />
    </Switch>
 </Router>
)
