const state = {
  caseParam: {
    id: '',
    type: 'طلایی',
    topic: 'موضوع',
    sendDate: 'dd/mm/yyyy',
    proceedingStatus: 'در انتظار',
    comment: '',
    url: ''
  }
};

const getters = {
  case : state => {
    return state.caseParam;
  }
};

const mutations = {
  case : (state, newcase) => {
    state.caseParam = newcase;
  }
};

export default {
  state,
  getters,
  mutations
}
