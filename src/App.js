import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/login-page'
import CreateAccountPage from './components/create-account-page'
import CreateDemoPage from './components/demo-page'
import CompositionPage from './components/composition-dynamic-react'
import Home from './components/home'
import landingPage from './components/landing-page/index'
import Saved from './components/saved'
import './App.css';

//ToDo:  use encodeURIComponent() function to have music data loaded in as a prop from URL.
//ToDo:  use if statement to conditionally load incoming prop on demo demo-page and composition component
//ToDo:  Figure out how to properly load into noteflight from JSON - DO THIS FIRST
//ToDo:  Create link from dropdowns on Navbar -- should pull in this.songs.whateverjson and load into URL bar.
//ToDo:  Convert Noteflight's JSON format into custom demo format
//ToDo:  Fix Songs in Demo Page.  

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/newacct" component={CreateAccountPage} />
        <Route exact path="/demo" component={CreateDemoPage} />
        <Route exact path="/composition" component={CompositionPage} />
        <Route exact path="/test-home" component={Home} />
        <Route exact path="/" component={landingPage} />
        <Route exact path="/saved" component={Saved} />
        <Route path="/loadintodemo/:prop" component={CreateDemoPage} />
        <Route path="/loadintocompose/:prop" component={CompositionPage} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
