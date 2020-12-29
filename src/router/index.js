import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ShoppingCart from '@/components/ShoppingCart'
import NavTop from '@/components/NavTop'
import bottomFooter from '@/components/bottomFooter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/navtop',
      name: 'NavTop',
      component: NavTop
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/bottomFooter',
      name: 'bottomFooter',
      component: bottomFooter
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
