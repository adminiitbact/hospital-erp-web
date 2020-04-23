const prod = true;

apiURL = API_ENDPOINT;


severityMap = {
  MILD: 'Mild or Very Mild',
  MODERATE: 'Moderate',
  SEVERE: 'Severe',
};

testStatusMap = {
  PENDING_TEST: 'Test Pending',
  PENDING_RESULT: 'Test Result Pending',
  POSITIVE: 'Positive',
  NEGATIVE: 'Negative',
};

function log(key, value) {
  if (!prod) {
    console.log(key);
    console.log(value);
  }
}

function getUrlParam(name) {
  const results = new RegExp(`[\?&]${name}=([^&#]*)`).exec(window.location.href);
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
}
