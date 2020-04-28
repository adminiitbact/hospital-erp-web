const getters = {
  wards(state) {
    return JSON.parse(JSON.stringify(state.wards));
  },
  facility(state) {
    return JSON.parse(JSON.stringify(state.facility));
  },
  patients(state) {
    return JSON.parse(JSON.stringify(state.patients));
  },
  referredPatients(state) {
    return JSON.parse(JSON.stringify(state.referredPatients));
  },
};

export default getters;
