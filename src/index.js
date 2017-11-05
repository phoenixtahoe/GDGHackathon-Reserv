import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyA7xZ4FI1h7aXhguv28vso3j1JyINvtGDo",
  authDomain: "reserv-f1ed6.firebaseapp.com",
  databaseURL: "https://reserv-f1ed6.firebaseio.com",
  projectId: "reserv-f1ed6",
  storageBucket: "reserv-f1ed6.appspot.com",
  messagingSenderId: "629093564151"
};
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
