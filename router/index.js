import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/HomePage',
    children: [
      {
        path: '/HomePage',
        name: 'homePage',
        component: () => import('../components/home/homePage/HomePage')
      },
      {
        path: '/City',
        name: 'city',
        component: () => import('../components/city/City')
      },
      {
        path: '/GoodList/:mark',
        name: 'goodList',
        component: () => import('../components/product/GoodList'),
        redirect: '/GoodList/:mark/Product',
        children: [
          {
            path: '/GoodList/:mark/Product',
            name: 'productShow',
            component: () => import('../components/product/ProductShow')
          }
        ]
      }
    ]
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../components/register/Login')
  },
  {
    path: '/Register',
    name: 'register',
    component: () => import('../components/register/Register')
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})

export default router;


