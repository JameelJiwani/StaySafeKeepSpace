import firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';


import { config } from './firebase_api_key.js';

if( !firebase.apps.length)
  firebase.initializeApp(config);
else 
  firebase.app();

export default firebase;
