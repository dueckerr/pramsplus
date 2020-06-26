import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "views/Home/Home.js";
import Solutions from "views/Solutions/Solutions.js";
import Blog from "views/Content/Blog.js";
import About from "views/About/About.js";
import LoginPage from "views/LoginPage/LoginPage.js";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


class App extends Component {

    render() {
      return (
        <HashRouter>
            <React.Suspense fallback={loading()}>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/solutions" component={Solutions} />
                    <Route path="/content" component={Blog} />
                    <Route path="/login-page" component={LoginPage} />
                    <Route path="/" component={Home} />
                </Switch>
            </React.Suspense>
      </HashRouter>    );
}
}

export default App;




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
