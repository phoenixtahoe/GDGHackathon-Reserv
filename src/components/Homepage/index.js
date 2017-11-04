import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import styled from "styled-components";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Link to="/search">
        <button>button</button>
        </Link>
      </div>
    )
  }
}
