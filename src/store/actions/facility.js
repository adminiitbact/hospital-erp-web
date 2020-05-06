import API from '../../utils/apis';


const actions = {
  fetchFacility({ state, commit, dispatch }) {
    API.fetchFacilityData(state.user.facilityId).then(
      (success) => {
        commit('setFacility', success.data);
        dispatch('fetchWards');
      }, (error) => {
        console.log(error);
      },
    );
  },

  fetchOnlyFacility({ state, commit }) {
    API.fetchFacilityData(state.user.facilityId).then(
      (success) => {
        commit('setFacility', success.data);
      }, (error) => {
        console.log(error);
      },
    );
  },

  updateFacilityDetails({ commit }, key, data) {
    commit('updateFacilityDetails', key, data);
  },
};

export default actions;
