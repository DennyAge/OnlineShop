import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard';
import Login from '@/components/Login';
import Registration from '@/components/Registration';

Vue.use(Router)

const isAuth = localStorage.getItem('isAuth')

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
      path: '/device/:id',
      name: 'Device',
      component: () => import('./pages/DevicePage'),
      beforeEnter: authGuard
    },
    {
      path: '/admin-tools',
      name: 'AdminTools',
      component: () => import('./pages/AdminTools'),
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
