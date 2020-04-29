import firebase from 'firebase/app';
import 'firebase/analytics';
// Add the Firebase products that you want to use
import 'firebase/auth';

const config = require('./config');

let firebaseApp = null;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(config.firebaseConfig);
} else {
  firebaseApp = firebase.app();
}


export default firebaseApp.auth();
