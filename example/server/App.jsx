import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';

const history = createBrowserHistory();

const App = () => (
  <div className="app-container">
    <Router history={history}>{renderRoutes(routes)}</Router>
  </div>
);

export default App;
