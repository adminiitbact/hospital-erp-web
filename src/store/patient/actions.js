import API from '../../utils/apis';


const actions = {
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
