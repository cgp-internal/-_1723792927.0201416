import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { LiveReports } from './LiveReports';
import { About } from './About';
import { CoinsContainer } from './CoinsContainer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/live-reports" component={LiveReports} />
      <Route path="/about" component={About} />
      <Route path="/coins-container" component={CoinsContainer} />
    </Switch>
  </BrowserRouter>
);

export { App };
export default App;