import API from '../../utils/apis';


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
};

export default actions;
