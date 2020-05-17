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
    Authorization: `Bearer ${getAuthTokenData().authToken}`,
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


function fetchReferredPatients(facilityId) {
  const data = {
    authToken: getAuthToken(),
    wardAlloted: false,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'facilities', facilityId.toString(), 'patients',
      'get',
    ),
    data, getHeaders(),
  );
}

module.exports = {
  fetchUser,
  fetchReferredPatients,
};
