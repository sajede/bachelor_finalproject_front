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
    state.pack = newpack;
  },
  addCount : (state, count) => {
    state.pack.count = Number(state.pack.count) + Number(count);
  },
};

export default {
  state,
  getters,
  mutations
}
