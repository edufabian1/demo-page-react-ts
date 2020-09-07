import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootswatch/dist/lux/bootstrap.min.css'
import Nav from './components/organisms/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/templates/About';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
