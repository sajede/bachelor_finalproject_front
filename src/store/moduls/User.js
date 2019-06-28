const state = {
  user: {
    id: 'dsd48e',
    username: 'm.sajede',
    name: 'ساجده',
    family: 'محمدی',
    emailAddress: 'm.sajede1375@gmail.com',
    password: '123456',
    role: 'user'
  }
};

const getters = {
  userRole : state => {
    return state.user.role;
  },
  userInfo : state => {
    return state.user;
  }
};

const mutations = {
  user : (state, user) => {
    state.user = user;
  }
};

export default {
  state,
  getters,
  mutations
}
