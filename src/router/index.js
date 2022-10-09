import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true,
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true,
    },
    {
        pathL: '/',
        component: 'Layout',
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                meta: { title: 'Dashboard', icon: 'dashboard' },
            },
        ],
    },
    { path: '*', redirect: '/404', hidden: true },
]
const createRenderer = () =>
    new Router({
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes,
    })
const router = createRouter()

export function resetRouter() {
    const newRouter = createRenderer()
    router.matcher = newRouter.matcher
}
export default router
