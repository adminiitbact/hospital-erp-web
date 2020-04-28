const urljoin = require('url-join');

const apiUrl = process.env.VUE_APP_API_ENDPOINT;
const firebaseConfig = JSON.parse(process.env.VUE_APP_FIREBASE);

const config = {
  apiUrl,
  userProfileFetchUrl: urljoin(apiUrl, '/hospital/user/profile'),
  fetchFacilityUrl: urljoin(apiUrl, 'facility/'),
  firebaseConfig,
  severityList: [
    // 'ASYMPTOMATIC',
    'MILD',
    'MODERATE',
    'SEVERE',
  ],
  testStatusList: [
    'SUSPECTED',
    'CONFIRMED',
  ],
  severityMap: {
    ASYMPTOMATIC: 'Asymptomatic',
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
  jurisdictionMap: {
    PMC: 'PMC',
    PCMC: 'PCMC',
    CS: 'Civil Surgeon',
    DHO: 'DHO',
  },
};

module.exports = config;
