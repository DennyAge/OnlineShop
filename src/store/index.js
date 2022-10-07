import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import post from './modules/post'
import devices from './modules/devices'
import products from './modules/products'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    post,
    devices,
    products
  }
})
