import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const files = require.context('./modules', false, /\.ts$/)
const routesList = files.keys().map(item => files(item).default).filter(item => item)
let childrenRoutes: any[] = []
routesList.forEach((item: any[]) => {
  childrenRoutes = [...childrenRoutes, ...item]
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index/home',
    component: Layout,
    children: childrenRoutes
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: "/:pathMatch(.*)", // 注意置于最底部
    redirect: "/404"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // @ts-ignore
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
