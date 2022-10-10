export default {
  state: {
    isAuth: false,
    user: {},
  },
  mutations: {
    setLogin(state, isAuth) {
      state.isAuth = isAuth
    }
  },
  getters: {
    getAuth(state) {
      return state.isAuth
    },
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setAuth({commit}, isAuth) {
      commit('setLogin', isAuth)
    },
    setUser() {

    }
  }
}
