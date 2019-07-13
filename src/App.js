import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/login-page'
import CreateAccountPage from './components/create-account-page'
import CreateDemoPage from './components/demo-page'
import CompositionPage from './components/composition-page/index'
import Home from './components/home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/newacct" component={CreateAccountPage} />
        <Route exact path="/demo" component={CreateDemoPage} />
        <Route exact path="/composition" component={CompositionPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
