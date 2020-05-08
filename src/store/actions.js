import _ from 'underscore';
import API from '../utils/apis';
import queries from '../utils/graphql/queries';
import mutations from '../utils/graphql/mutations';

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


  fetchFacility({ commit }) {
    queries.getFacility().then((res) => {
      commit('setFacility', res);
      commit('setWards', res.wards);
    }).catch((error) => {
      console.log(error);
    });
  },


  updateFacilityDetails({ commit }, data) {
    mutations.updateFacility(data.data, data.id).then((res) => {
      commit('setFacility', res);
    }).catch((error) => {
      console.log(error);
    });
  },

  createWard({ state, commit }, data) {
    mutations.createWard(data).then((res) => {
      if (res.id) {
        commit('setWard', res);
        if (state.wards) {
          state.wards.push(res);
          commit('setWards', state.wards);
        } else {
          commit('setWards', [res]);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  },

  updateWard({ state, commit }, data) {
    mutations.updateWard(data).then((res) => {
      if (res.id) {
        commit('setWard', res);
        state.wards = _.reject(state.wards, (item) => item.id === data.id);
        state.wards.push(res);
        commit('setWards', state.wards);
      }
    }).catch((error) => {
      console.log(error);
    });
  },

  removeWard({ state, commit }, wardID) {
    mutations.deleteWard(wardID).then((res) => {
      if (res) {
        commit('setWard', { deleted: true });
        state.wards = _.reject(state.wards, (item) => item.id === wardID);
        commit('setWards', state.wards);
      }
    }).catch((error) => {
      console.log(error);
    });
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
