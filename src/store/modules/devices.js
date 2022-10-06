export default {
  state: {
    types: [
      {id: 1, name: 'Phone', img: 'mdi-cellphone-marker'},
      {id: 2, name: 'TV', img: 'mdi-laptop'},
      {id: 3, name: 'Tablet', img: 'mdi-tablet'},
      {id: 4, name: 'Computer', img: 'mdi-laptop'},
      {id: 5, name: 'Watch', img: 'mdi-watch-variant'},
    ],
    brands: [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Samsung'},
      {id: 3, name: 'Dell'}
    ],
    devices: [
      {id: 1, name: 'Iphone 12', price: 10000, rating: 5, img: 'backgrounds/bg.jpg'},
      {id: 2, name: 'Redmi 5', price: 18000, rating: 3, img: 'backgrounds/md.jpg'},
      {id: 3, name: 'Redmi 5', price: 18000, rating: 3, img: 'backgrounds/bg-2.jpg'},
      {id: 4, name: 'Redmi 5', price: 18000, rating: 3, img: 'backgrounds/md2.jpg'},
      {id: 5, name: 'Redmi 5', price: 18000, rating: 3, img: 'backgrounds/md2.jpg'},
    ],
  },
  mutations: {},
  getters: {
    getAll(state) {
      return state
    },
    getTypes(state) {
      return state.types
    },
    getBrads(state) {
      return state.brands
    },
    getDevices(state) {
      return state.devices
    }
  },
  actions: {
    setTypes() {

    },
    setBrands() {

    },
    setDevices() {

    }
  }
}
