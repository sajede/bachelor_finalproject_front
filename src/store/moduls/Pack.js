const state = {
  pack: {
    name: '',
    count: '2',
    price: '12',
    comment: '',
  }
};

const getters = {
  pack : state => {
    return state.pack;
  }
};

const mutations = {
  pack : (state, newpack) => {
    state.caseParam = newpack;
  }
};

export default {
  state,
  getters,
  mutations
}
