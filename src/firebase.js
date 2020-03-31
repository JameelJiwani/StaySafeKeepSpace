import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDPGbQpHT575tcmjT8hcFEUlwk6b2WxSvo",
  authDomain: "staysafekeepsp.firebaseapp.com",
  databaseURL: "https://staysafekeepsp.firebaseio.com",
  projectId: "staysafekeepsp",
  storageBucket: "staysafekeepsp.appspot.com",
  messagingSenderId: "240453295356",
  appId: "1:240453295356:web:292656c61af33b61b4cb79",
  measurementId: "G-HD6R7NE7MD"
};
if( !firebase.apps.length)
  firebase.initializeApp(config);
else 
  firebase.app();

export default firebase;
