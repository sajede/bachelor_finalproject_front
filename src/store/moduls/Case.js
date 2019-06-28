const state = {
  caseParam: {
    sendDate: 'dd/mm/yyyy',
    referrerNumbers: 'ارجاع به',
    topic: 'موضوع',
    type: '',
    proceedingStatus: 'باز',
    satisfactionStatus: '',
    comment: '',
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
