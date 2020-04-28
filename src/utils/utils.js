function capitalizeOnlyFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function hashedSeverityTestStatus(severity, testStatus) {
  return `${severity}.${testStatus}`.toLowerCase();
}

function setAuthTokenOnLocalStorage(authToken) {
  window.localStorage.setItem('authToken', authToken);
  this.$store.dispatch('setAuthToken');
}

module.exports = {
  capitalizeOnlyFirst,
  hashedSeverityTestStatus,
  setAuthTokenOnLocalStorage,
};
