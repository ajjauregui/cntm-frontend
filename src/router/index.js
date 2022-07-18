import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },

  {
    path: '/user-list',
    name: 'user-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/User/UserListView.vue')
  },
  {
    path: '/new-user',
    name: 'new-user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/User/NewUserView.vue')
  },
  {
    path: '/update-user',
    name: 'update-user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/User/UpdateUserView.vue')
  },
  {
    path: '/delete-user',
    name: 'delete-user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/User/DeleteUserView.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
