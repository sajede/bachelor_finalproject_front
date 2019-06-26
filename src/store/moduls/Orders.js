const state = {
  Orders: [
    {
    date: '2019/6/23',
    subject: 'Uni Project',
    result: 'Coming soon.....',
    descriptionQ: 'some information about request',
    descriptionR: 'some information about result',
    fileQ: 'http://request',
    fileR: 'http://result',
    },
    {
      date: '2019/4/15',
      subject: 'Parscoders Project',
      result: 'Completed',
      descriptionQ: 'some information about request',
      descriptionR: 'some information about result',
      fileQ: 'http://request',
      fileR: 'http://result',
    }
  ]
};

const getters = {
  getOrders : state => {
    return state.Orders;
  }
};

const mutations = {
  user : (state, userData) => {
    state.User = userData;
  }
};

const actions = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
