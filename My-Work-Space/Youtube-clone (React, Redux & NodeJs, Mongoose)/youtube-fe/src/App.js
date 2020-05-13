import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from './components/loginreg';
import Home from "./components/home";
import "./App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
