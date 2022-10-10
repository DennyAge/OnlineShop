import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

console.log(process.env.VUE_APP_API_URL);


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
