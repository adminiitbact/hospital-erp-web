import firebase from 'firebase/app';
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAtDZfhftwpIpN9rZ5I4GHYijGuCbZbib0',
  authDomain: 'hospital-erp-prod.firebaseapp.com',
  databaseURL: 'https://hospital-erp-prod.firebaseio.com',
  projectId: 'hospital-erp-prod',
  storageBucket: 'hospital-erp-prod.appspot.com',
  messagingSenderId: '374895034375',
  appId: '1:374895034375:web:68dac98f0009c12906aaa2',
  measurementId: 'G-FMK8FK9CQ1',
};

let firebaseApp = null;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}


export default firebaseApp.auth();
