import { createRouter, createWebHistory } from 'vue-router'
import Header from "../components/Main.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Header
  },
  {
    path: '/post/:id',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Post/MainPost.vue')
  },
  {
    path: '/info',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/User/Information.vue')
  },
  {
    path: '/reservations',
    name: 'Reservations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Customers/Reservation.vue')
  },
  {
    path: '/bookings',
    name: 'Bookings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Hote/Bookings.vue')
  },
  {
    path: '/espaces',
    name: 'Espaces',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Hote/MesEspaces.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

