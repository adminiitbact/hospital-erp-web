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
};

export default mutations;
