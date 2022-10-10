export default {
  state: {
    users: []
  },
  mutations: {
    allUser(state, user) {
      state.users = user
    },
  },
  getters: {
    getUsers(state) {
      return state.users
    },

  },
  actions: {
    async fetchUsers(ctx) {
      const res = await fetch('https://fakestoreapi.com/users')
      const users = await res.json()

      ctx.commit('allUser', users)
    }
  }
}
