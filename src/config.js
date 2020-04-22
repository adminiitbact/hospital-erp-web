const urljoin = require('url-join');

const apiUrl = process.env.VUE_APP_API_ENDPOINT;
const firebaseConfig = JSON.parse(process.env.VUE_APP_FIREBASE);

const config = {
  apiUrl,
  userProfileFetchUrl: urljoin(apiUrl, '/hospital/user/profile'),
  fetchFacilityUrl: urljoin(apiUrl, 'facility/'),
  firebaseConfig,
  severityMap: [
    'MILD',
    'MODERATE',
    'SEVERE',
  ],
  testStatusMap: [
    'SUSPECTED',
    'CONFIRMED',
  ],
};

module.exports = config;
