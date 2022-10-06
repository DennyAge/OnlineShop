import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard';
import Auth from '@/pages/Auth';

Vue.use(Router)

const isAuth = false

const authGuard = (to, from, next) => {
  if (!isAuth) next({name: 'Login'})
  else next ()
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: "Login",
      component: Auth
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Auth
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('./pages/Shop'),

    },
    {
      path: '/devices',
      name: 'Devices',
      component: () => import('./pages/Devices'),

    },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('./pages/Basket'),
      beforeEnter: authGuard
    }
  ]
})
