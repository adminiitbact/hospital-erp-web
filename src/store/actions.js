import API from '../utils/apis';


const actions = {
  setAuthToken({ commit, dispatch }) {
    commit('setAuthToken', window.localStorage.authToken);
    API.fetchUser().then((success) => {
      commit('setUser', success.data.profile);
      dispatch('fetchFacility');
    }, (error) => {
      console.log(error);
    });
  },

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

  fetchWards({ state, commit }) {
    API.fetchWards(state.user.facilityId, 'NEGATIVE', 'MILD').then(
      (success) => {
        commit('setWards', success.data.list);
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(
          `Error in fetching ward information: ${error.responseJSON.status}`,
        );
        console.log(error);
      },
    );
  },
};

export default actions;
