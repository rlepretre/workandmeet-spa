import { createRouter, createWebHistory } from 'vue-router'

import Booking from '../views/Booking.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
    { path: '/', component: Booking },
    { path: '/checkout', component: Checkout },
]
  
export const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})