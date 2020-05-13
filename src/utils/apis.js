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

// function fetchFacilityData(facilityId) {
//   return getPromisifiedRequest(
//     'POST', urljoin(config.fetchFacilityUrl, facilityId.toString()),
//     getAuthTokenData(), getHeaders(),
//   );
// }

// function fetchWards(facilityId, testStatus, severity) {
//   const data = {
//     authToken: getAuthToken(),
//     testStatus,
//     severity,
//   };
//   return getPromisifiedRequest(
//     'POST', urljoin(
//       config.apiUrl, 'facilities', facilityId.toString(), 'wards',
//       'get',
//     ),
//     data, getHeaders(),
//   );
// }

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

function updateFacilityDetails(facilityId, detailId, updateData) {
  const data = {
    authToken: getAuthToken(),
    data: updateData,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'facility', facilityId.toString(), detailId,
    ),
    data, getHeaders(),
  );
}

function fetchPatients(facilityId) {
  const data = {
    authToken: getAuthToken(),
    wardAlloted: true,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'facilities', facilityId.toString(), 'patients',
      'get',
    ),
    data, getHeaders(),
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

function removeWard(facilityId, wardId) {
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'facilities', facilityId.toString(), 'wards',
      wardId.toString(), 'remove',
    ),
    getAuthTokenData(), getHeaders(),
  );
}


function addPatient(patientData) {
  const data = {
    authToken: getAuthToken(),
    data: patientData,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'patients/new',
    ),
    data, getHeaders(),
  );
}

function updateFacilityProfile(facilityId, facilityProfile) {
  const data = {
    authToken: getAuthToken(),
    data: facilityProfile,
  };
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'add', 'facility', 'profile', facilityId.toString(),
    ),
    data, getHeaders(),
  );
}


function addPatientClinicalData(patientData) {
  // eslint-disable-next-line no-param-reassign
  patientData.authToken = getAuthToken();
  // eslint-disable-next-line no-param-reassign
  patientData.patientid = '';
  // TODO:
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'patients-clinical-hist', 'post',
    ),
    patientData, getHeaders(),
  );
}


function addPatientCovidTestResult(patientData) {
  // eslint-disable-next-line no-param-reassign
  patientData.authToken = getAuthToken();
  // eslint-disable-next-line no-param-reassign
  patientData.patientid = '';
  // TODO:
  return getPromisifiedRequest(
    'POST', urljoin(
      config.apiUrl, 'patients-covid-test-result', 'post',
    ),
    patientData, getHeaders(),
  );
}

module.exports = {
  fetchUser,
  // fetchFacilityData,
  // fetchWards,
  saveWard,
  updateFacilityDetails,
  fetchPatients,
  fetchReferredPatients,
  removeWard,
  addPatient,
  addPatientClinicalData,
  addPatientCovidTestResult,
  updateFacilityProfile,
};
