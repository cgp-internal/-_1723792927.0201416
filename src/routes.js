import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './components/App';
import { Home } from './components/Home';
import { LiveReports } from './components/LiveReports';
import { About } from './components/About';
import { CoinsContainer } from './components/CoinsContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/live-reports" component={LiveReports} />
      <Route path="/about" component={About} />
      <Route path="/coins-container" component={CoinsContainer} />
      <Route path="*" component={App} />
    </Switch>
  </BrowserRouter>
);

export { Routes, App, Home, LiveReports, About, CoinsContainer };