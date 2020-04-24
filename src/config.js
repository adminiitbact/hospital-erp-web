const urljoin = require('url-join');

const apiUrl = process.env.VUE_APP_API_ENDPOINT;
const firebaseConfig = JSON.parse(process.env.VUE_APP_FIREBASE);

const config = {
  apiUrl,
  userProfileFetchUrl: urljoin(apiUrl, '/hospital/user/profile'),
  fetchFacilityUrl: urljoin(apiUrl, 'facility/'),
  firebaseConfig,
  severityList: [
    'MILD',
    'MODERATE',
    'SEVERE',
  ],
  testStatusList: [
    'SUSPECTED',
    'CONFIRMED',
  ],
  severityMap: {
    MILD: 'Mild or Very Mild',
    MODERATE: 'Moderate',
    SEVERE: 'Severe',
  },
  testStatusMap: {
    PENDING_TEST: 'Test Pending',
    PENDING_RESULT: 'Test Result Pending',
    POSITIVE: 'Positive',
    NEGATIVE: 'Negative',
  },
};

module.exports = config;
