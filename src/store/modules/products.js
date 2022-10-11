import {$host} from '@/http';
import products from '@/pages/Products';

export default {
  state: {
    products: [],
    categories: [],
    brands: [],
    product: []
  },
  mutations: {
    getProducts(state, product) {
      state.products = product
    },
    getCategories(state, categories) {
      state.categories = categories
    },
    allBrands(state, brands) {
      state.brands = brands
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
    },
    increment(state, index) {
      state.product[index].quantity++
    },
    decrement(state, index) {
      if (state.product[index].quantity > 1){
        state.product[index].quantity--
      }
    }
  },
  getters: {
    allProducts(state) {
      return state.products
    },
    allTypes(state) {
      return state.categories
    },
    getProduct(state) {
      return state.product
    },
    getBrands(state) {
      return state.brands
    },
  },
  actions: {
    async fetchDevices(ctx) {
      const res = await $host.get('api/device' )
      console.log(res);
      const products = res.data.rows
      ctx.commit('getProducts', products)
    },
    async fetchTypes(ctx) {
      const res = await $host.get('api/type' )
      const categories = res.data

      ctx.commit('getCategories', categories)
    },
    async fetchBrands(ctx) {
      const res = await $host.get('api/brand' )
      const brands = res.data

      ctx.commit('allBrands', brands)
    },
    addProductToBasket({commit}, product) {
      commit('addProductToBasket', product)
    },
    deleteProductFromBasket({commit}, index) {
      commit('removeProduct', index)
    },
    createNewProducts(commit) {
      commit('createProducts', products)
    },
    incrementProductItem({commit}, index) {
      commit('increment', index)
    },
    decrementProductItem({commit}, index) {
      commit('decrement', index)
    }
  }
}
