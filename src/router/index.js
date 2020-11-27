import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/persons',
    name: 'Persons',
    component: () => import('../views/Persons.vue')
  },
  {
    path: '/persons/:id',
    name: 'PersonDetails',
    component: () => import('../views/PersonDetails.vue')
  },
  {
    path: '/create-person',
    name: 'CreatePerson',
    component: () => import('../views/CreatePerson.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
