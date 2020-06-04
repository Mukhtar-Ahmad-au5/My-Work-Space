import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home"
import Navbar from "./components/navbar";
import ProfilePage from "./components/profilepage";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user" component={ProfilePage}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
