const state = {
  caseParam: {
    id: '',
    type: 'طلایی',
    topic: 'موضوع',
    sendDate: 'dd/mm/yyyy',
    proceedingStatus: 'در انتظار',
    comment: '',
    file: 'http://dl',
    reply: {
      comment: 'گزارش شما با کد #102586 ثبت شد',
      file: 'http://dl',
    }
  }
};

const getters = {
  case : state => {
    return state.caseParam;
  },
  caseReply : state => {
    return state.case.reply;
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
