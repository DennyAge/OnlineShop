export default {
  state: {
    carts: []
  },
  mutations: {
    allCarts(state, cart) {
      state.carts = cart
    },
  },
  getters: {
    getCarts(state) {
      return state.carts
    },

  },
  actions: {
    async fetchCarts(ctx) {
      const res = await fetch('https://fakestoreapi.com/carts')
      const carts = await res.json()

      ctx.commit('allCarts', carts)
    }
  }
}
