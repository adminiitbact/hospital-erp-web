import store from '../store/index';
import auth from '../firebaseConfig';


function capitalizeOnlyFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function hashedSeverityTestStatus(severity, testStatus) {
  return `${severity}.${testStatus}`.toLowerCase();
}

function setAuthTokenOnLocalStorage(authToken) {
  window.localStorage.setItem('authToken', authToken);
  store.dispatch('setAuthToken');
}

function refreshFirebaseAuthToken() {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(
        (authToken) => {
          setAuthTokenOnLocalStorage(authToken);
        },
      );
    }
    unsubscribe();
  });
}

function standardErrorHandler(errorObj) {
  if (errorObj.errorCode === 10) {
    refreshFirebaseAuthToken();
  }
}

export default {
  capitalizeOnlyFirst,
  hashedSeverityTestStatus,
  setAuthTokenOnLocalStorage,
  refreshFirebaseAuthToken,
  standardErrorHandler,
};
