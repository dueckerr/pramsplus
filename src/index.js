import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import { env } from './config';

// pages for this product
import Home from "views/Home/Home.js";
import Solutions from "views/Solutions/Solutions.js";
import Blog from "views/Content/Blog.js";
import About from "views/About/About.js";
import Download from "views/Download/Download.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import NotFoundPage from "views/NotFoundPage.js";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-117510737-1');
ReactGA.pageview(window.location.pathname + window.location.search);

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/content" component={Blog} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/download" component={Download} />
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} /> 
    </Switch>
  </Router>,
  document.getElementById("root")
);




// import 'react-app-polyfill/ie9'; // For IE 9-11 support
// import 'react-app-polyfill/stable';
// // import 'react-app-polyfill/ie11'; // For IE 11 support
// import './polyfill'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
