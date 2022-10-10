import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard';
import Login from '@/components/Login';
import Registration from '@/components/Registration';

Vue.use(Router)

const isAuth = localStorage.getItem('isAuth')

const authGuard = (to, from, next) => {
  console.log(localStorage.getItem('isAuth'));
  if (!isAuth) next({name: 'Login'})
  else next ()
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: "Login",
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: authGuard
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('./pages/Products'),
      beforeEnter: authGuard

    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./pages/Cart'),
      beforeEnter: authGuard
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('./pages/Users'),
      beforeEnter: authGuard
    },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('./pages/Basket'),
      beforeEnter: authGuard
    }
  ]
})
