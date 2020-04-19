const urljoin = require('url-join');

const apiUrl = process.env.VUE_APP_API_ENDPOINT;
console.log(process.env);

const config = {
  apiUrl,
  userProfileFetchUrl: urljoin(apiUrl, '/hospital/user/profile'),
  fetchFacilityUrl: urljoin(apiUrl, 'facility/'),
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
