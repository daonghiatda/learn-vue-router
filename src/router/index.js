/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe'
import AboutView from '../views/AboutView'
import AddTask from '../views/AddTask'
import UpdateTask from '../views/UpdateTask'
import ViewTask from '../views/ViewTask'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/about/:object',
    name: 'about',
    component: AboutMe
  },
  {
      path: '/addtask',
      name: 'addtask',
      component: AddTask
  },
  {
      path: '/update-task/:taskId',
      name: 'update-task',
      component: UpdateTask
  },
  {
      path: '/view-task/:taskId',
      name: 'view-task',
      component: ViewTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
