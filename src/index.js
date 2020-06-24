import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "views/Home/Home.js";
import Solutions from "views/Solutions/Solutions.js";
import Blog from "views/Content/Blog.js";
import About from "views/About/About.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/content" component={Blog} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
