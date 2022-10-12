import {$host} from '@/http';

export default {
  state: {
    devices: {
      count: '',
      rows: {}
    },
    types: [],
    brands: [],
    selectedType: {},
    selectedBrand: {},
    device: {},
    page: 1,
    totalCount: 0,
    limit: 3,

    product: []
  },
  mutations: {
    allDevices(state, product) {
      state.devices = product
    },
    allTypes(state, types) {
      state.types = types
    },
    allBrands(state, brands) {
      state.brands = brands
    },
    setSelectedType(state, type) {
      state.selectedType = type
    },
    setSelectedBrand(state, brand) {
      state.selectedBrand = brand
    },
    setOneDevice(state, device) {
      state.device = device
    },

    setPage(state, page) {
      state.page = page
    },
    setTotalCount(state, totalCount) {
      state.totalCount = totalCount
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
    createProducts(state, devices) {
      state.devices.unshift(devices)
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
    getDevices(state) {
      return state.devices.rows
    },
    getTypes(state) {
      return state.types
    },
    getBrands(state) {
      return state.brands
    },
    getSelectedType(state) {
      return state.selectedType
    },
    getSelectedBrand(state) {
      return state.selectedBrand
    },
    getOneDevice(state) {
      return state.device
    },

    getPage(state) {
      return state.page
    },
    getTotalCount(state) {
      return  state.devices.count
    },



    getProduct(state) {
      return state.product
    },
  },
  actions: {
    async fetchDevices(ctx, limit = 6) {
      const res = await $host.get(`api/device?limit=` + limit )
      const devices = res.data
      ctx.commit('allDevices', devices)
    },
    async fetchTypes(ctx) {
      const res = await $host.get('api/type' )
      const types = res.data
      ctx.commit('allTypes', types)
    },
    async fetchBrands(ctx, typeId, brandId, page, limit = 6) {
      const res = await $host.get('api/brand', {params: {
          typeId, brandId, page, limit
        }})
      const brands = res.data
      ctx.commit('allBrands', brands)
    },
    async fetchOneDevice(ctx, id) {
      const res = await $host.get('api/device/' + id )
      const device = res.data
      ctx.commit('setOneDevice', device)
    },

    selectedType({commit}, type) {
      commit('setSelectedType', type)
    },
    selectedBrand({commit}, brand) {
      commit('setSelectedBrand', brand)
    },





    addProductToBasket({commit}, product) {
      commit('addProductToBasket', product)
    },
    deleteProductFromBasket({commit}, index) {
      commit('removeProduct', index)
    },
    incrementProductItem({commit}, index) {
      commit('increment', index)
    },
    decrementProductItem({commit}, index) {
      commit('decrement', index)
    }
  }
}
