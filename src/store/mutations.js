const mutations = {
  setAuthToken(state, authToken) {
    state.authToken = authToken;
  },
  setUser(state, user) {
    state.user = user;
  },
  setFacility(state, facility) {
    state.facility = facility;
  },
  setWards(state, wards) {
    state.wards = wards;
  },
  setWard(state, ward) {
    state.ward = ward;
  },
  updateFacilityDetails(state, key, data) {
    state.facility[key].data = data;
  },
  setPatients(state, patients) {
    state.patients = patients;
  },
  addPatient(state, patient) {
    state.patients.push(patient);
  },
  setReferredPatients(state, referredPatients) {
    state.referredPatients = referredPatients;
  },
};

export default mutations;
