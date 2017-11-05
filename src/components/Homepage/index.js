import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import styled from "styled-components";
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7xZ4FI1h7aXhguv28vso3j1JyINvtGDo",
    authDomain: "reserv-f1ed6.firebaseapp.com",
    databaseURL: "https://reserv-f1ed6.firebaseio.com",
    projectId: "reserv-f1ed6",
    storageBucket: "reserv-f1ed6.appspot.com",
    messagingSenderId: "629093564151"
  };
  firebase.initializeApp(config);

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

// export function getName()
// {
//   var ref = firebase.database().ref();
//   var newDiv = document.createElementByID("div");
//   return (
//     newDiv.innerHTML = ref.child("Food/American");
//   )
// }
