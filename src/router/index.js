import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/test.vue'
import list from '../views/lazy/index.vue'
import scroll from '../views/lazy/scroll.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: scroll
  }
]

const router = new VueRouter({
  routes
})

export default router
