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
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('./pages/Products'),

    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./pages/Cart'),
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('./pages/Users'),
    },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('./pages/Basket'),
      // beforeEnter: authGuard
    }
  ]
})
