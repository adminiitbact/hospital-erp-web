const getters = {
  wards(state) {
    return JSON.parse(JSON.stringify(state.wards));
  },
  facility(state) {
    return JSON.parse(JSON.stringify(state.facility));
  },
};

export default getters;
