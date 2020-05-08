import firebase from 'firebase/app';
import 'firebase/analytics';
// Add the Firebase products that you want to use
import 'firebase/auth';

let firebaseApp = null;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(JSON.parse(process.env.VUE_APP_FIREBASE));
} else {
  firebaseApp = firebase.app();
}


export default firebaseApp.auth();
