import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDPGbQpHT575tcmjT8hcFEUlwk6b2WxSvo",
  authDomain: "staysafekeepsp.firebaseapp.com",
  databaseURL: "https://staysafekeepsp.firebaseio.com",
  projectId: "staysafekeepsp",
  storageBucket: "staysafekeepsp.appspot.com",
  messagingSenderId: "240453295356",
  appId: "1:240453295356:web:292656c61af33b61b4cb79",
  measurementId: "G-HD6R7NE7MD"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
