import './App.css'
import React, { Component } from 'react';
import Home from './Home.js';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './About.js';
import Users from './Users.js';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <Route exact path = "/" component = {Home} /> */}
      <Route path = "/About" component = {About} />
      {/* <Route path="/Users/:id" render={(props) => <Users {...props} greetingMessage = "Good Morning"/>} /> */}
      <Switch>
          <Route path="/users/:id" render={(props) => (
            <Users {...props} greetingMessage="Good Morning" />)} />
          <Route path="/strict-access" render={(props) => (
            <StrictAccess {...props} user={{ username: "joao", password: "1234" }} />)} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// {...props}