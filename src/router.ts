import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import HeaderView from '@/views/HeaderView.vue'
import DisclaimerView from '@/views/DisclaimerView.vue'
import MainView from '@/views/MainView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainView
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: WelcomeView
        },
        {
            path: '/header',
            name: 'header',
            component: HeaderView
        },
        {
            path: '/disclaimer',
            name: 'disclaimer',
            component: DisclaimerView
        },
        {
            path: '/:pathMatch(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})

export default router
