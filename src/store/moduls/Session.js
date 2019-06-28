const state = {
  sessionId: 'Not assigned'
};

const getters = {
  sessionId : state => {
    return state.sessionId;
  }
};

const mutations = {
  sessionId : (state, id) => {
    state.sessionId = id;
  }
};

export default {
  state,
  getters,
  mutations
}
