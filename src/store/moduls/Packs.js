const state = {
  packs: [
    {
      id: 'asds125',
      name: 'بسته ی تعطیلات تابستان',
      count: '10',
      price: '15',
      comment: '',
    },
    {
      id: 'dttrh845',
      name: 'بسته ی امتحانات (ویژه دانشجویان)',
      count: '5',
      price: '10',
      comment: '',
    },
    {
      id: 'sd5sfd5',
      name: 'بسته ی مهمان',
      count: '1',
      price: '0',
      comment: '',
    },
  ]
};

const getters = {
  packs : state => {
    return state.packs;
  }
};

const mutations = {
  addPack : (state, newpack) => {
    state.packs.push(newpack);
  },
  removePack: (state, index) => {
    state.packs.splice(state.packs.indexOf(state.packs.find(d => d.id === index)), 1);
  }
};

export default {
  state,
  getters,
  mutations
}
