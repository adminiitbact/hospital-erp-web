const $ = require('jquery');
const urljoin = require('url-join');
const config = require('../config');


function getAuthToken() {
  return window.localStorage.getItem('authToken');
}

function getAuthTokenData() {
  return {
    authToken: getAuthToken(),
  };
}

function getHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

function getPromisifiedRequest(type, url, data, headers) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type,
      url,
      data: JSON.stringify(data),
      headers,
      success(sData) {
        resolve(sData);
      },
      error(error) {
        reject(error);
      },
    });
  });
}

function fetchUser() {
  return getPromisifiedRequest(
    'POST', config.userProfileFetchUrl,
    getAuthTokenData(), getHeaders(),
  );
}

function fetchFacilityData(facilityId) {
  return getPromisifiedRequest(
    'POST', urljoin(config.fetchFacilityUrl, facilityId.toString()),
    getAuthTokenData(), getHeaders(),
  );
}

function fetchWards(facilityId, testStatus, severity) {
  const data = {
    authToken: getAuthToken(),
    testStatus,
    severity,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'facilities', facilityId.toString(), 'wards',
    ),
    data, getHeaders(),
  );
}

function saveWard(facilityId, ward) {
  const data = {
    authToken: getAuthToken(),
    ...ward,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'facilities', facilityId.toString(), 'wards',
      'post',
    ),
    data, getHeaders(),
  );
}

module.exports = {
  fetchUser,
  fetchFacilityData,
  fetchWards,
  saveWard,
};
