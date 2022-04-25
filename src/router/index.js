import { createRouter, createWebHistory } from 'vue-router'
import Header from "../components/Main.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Header
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router