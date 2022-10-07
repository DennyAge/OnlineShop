export default {
  state: {
    products: [],
    categories: [],
    product: []
  },
  mutations: {
    getProducts(state, posts) {
      state.products = posts
    },
    getCategories(state, categories) {
      state.categories = categories
    },
    addProductToBasket(state, product) {
      if (state.product.length) {
        let isProductExists = false
        state.product.map((item) => {
          if (item.id === product.id) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.product.push(product)
        }
      } else {
        state.product.push(product)
      }
    },
    removeProduct(state, index) {
      state.product.splice(index, 1)
    },
    createProducts(state, products) {
      state.products.unshift(products)
    }
  },
  getters: {
    allProducts(state) {
      return state.products
    },
    allCategories(state) {
      return state.categories
    },
    getProduct(state) {
      return state.product
    },
  },
  actions: {
    async fetchProducts(ctx, limit) {
      const res = await fetch(`https://fakestoreapi.com/products?limit=` + limit )
      const products = await res.json()

      ctx.commit('getProducts', products)
    },
    async fetchCategories(ctx) {
      const res = await fetch('https://fakestoreapi.com/products/categories')
      const categories = await res.json()

      ctx.commit('getCategories', categories)
    },
    addProductToBasket({commit}, product) {
      commit('addProductToBasket', product)
    },
    deleteProductFromBasket({commit}, index) {
      commit('removeProduct', index)
    },
    createNewProducts(commit) {
      commit('createProducts', products)
    }
  }
}
