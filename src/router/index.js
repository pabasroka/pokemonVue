import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Info from "@/views/Info";
import AllPokemons from "@/views/AllPokemons";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/all',
    name: 'All',
    component: AllPokemons
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
