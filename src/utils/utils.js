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

function getFormValues(form) {
  // eslint-disable-next-line prefer-const
  let data = {};
  for (let i = 0; i < form.length; i += 1) {
    if (form[i][2] === 'number' || form[i][2] === 'text') {
      data[form[i][1]] = form[i][3];
    } else if (form[i][2] === 'option') {
      data[form[i][1]] = form[i][4];
    } else if (form[i][2] === 'checkbox') {
      data[form[i][1]] = {};
      for (let j = 0; j < form[i][3].length; j += 1) {
        if (form[i][3][j].length === 2) {
          data[form[i][1]][form[i][3][j][0]] = form[i][3][j][1];
        }
      }
    } else if (form[i][2] === 'radio') {
      data[form[i][1]] = form[i][4];
    }
  }
  return data;
}

export default {
  capitalizeOnlyFirst,
  hashedSeverityTestStatus,
  setAuthTokenOnLocalStorage,
  refreshFirebaseAuthToken,
  standardErrorHandler,
  getFormValues,
};
