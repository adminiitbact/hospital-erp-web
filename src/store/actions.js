import API from '../utils/apis';


const actions = {
  setAuthToken({ commit, dispatch }) {
    dispatch('setAuthTokenOnly');
    API.fetchUser().then((success) => {
      commit('setUser', success.data.profile);
      dispatch('fetchFacility');
    }, (error) => {
      console.log(error);
    });
  },

  setAuthTokenOnly({ commit }) {
    commit('setAuthToken', window.localStorage.authToken);
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

  fetchOnlyFacility({ state, commit }) {
    API.fetchFacilityData(state.user.facilityId).then(
      (success) => {
        commit('setFacility', success.data);
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

  updateFacilityDetails({ commit }, key, data) {
    commit('updateFacilityDetails', key, data);
  },

  fetchPatients({ state, commit }) {
    API.fetchUser().then((usuccess) => {
      commit('setUser', usuccess.data.profile);
      API.fetchPatients(state.user.facilityId).then(
        (success) => {
          commit('setPatients', success.data.list);
        }, (error) => {
          // eslint-disable-next-line no-alert
          alert(
            `Error in fetching ward information: ${error.responseJSON.status}`,
          );
          console.log(error);
        },
      );
    }, (error) => {
      console.log(error);
    });
  },

  fetchReferredPatients({ state, commit }) {
    API.fetchUser().then((usuccess) => {
      commit('setUser', usuccess.data.profile);
      API.fetchReferredPatients(state.user.facilityId).then(
        (success) => {
          commit('setReferredPatients', success.data.list);
        }, (error) => {
          // eslint-disable-next-line no-alert
          alert(
            `Error in fetching ward information: ${error.responseJSON.status}`,
          );
          console.log(error);
        },
      );
    }, (error) => {
      console.log(error);
    });
  },
};

export default actions;
