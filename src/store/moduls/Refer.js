const state = {
  refer: {
    comment: '',
    caseEntity: '',
    fromUser: '',
    toUser: '',
    referrerNumber: '0'
  }
};

const getters = {
  referr : state => {
    return state.referr;
  }
};

const mutations = {
  referr : (state, referr) => {
    state.referr = referr;
  }
};

export default {
  state,
  getters,
  mutations
}
