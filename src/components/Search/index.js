import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import styled from "styled-components";

export default class Search extends Component {
  render() {
    return (
      <div>
      <Link to="/">
        <div>Search Page</div>
      </Link>
      </div>
    )
  }
}
