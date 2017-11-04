import React, { Component } from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/index";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
        <Route
          path="/"
          exact
          component={Homepage}
          />
        <Route render={() => <h3>No Match</h3>} />
      </Switch>
    </BrowserRouter>
    </div>
    );
  }
}

const Header = styled.h1`
    color: red;
`
export default App;
