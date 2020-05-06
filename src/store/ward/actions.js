import API from '../../utils/apis';


const actions = {
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
