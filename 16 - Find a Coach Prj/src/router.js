import { createRouter, createWebHistory } from "vue-router"

import CoachesList from './pages/coaches/CoachesList.vue'
import NotFound from './pages/NotFound.vue'
import store from './store/index.js'

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue')
const userAuth = () => import('./pages/auth/UserAuth.vue')


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetail,
            props: true,
            children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        {
            path: '/register', component: CoachRegistration,
            meta: { requireAuth: true }
        },
        {
            path: '/requests', component: RequestsReceived,
            meta: { requireAuth: true }
        },
        {
            path: '/auth', component: userAuth,
            meta: { requireUnAuth: true }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.getters.isAuthed) {
        next('/auth')
    }
    else if (to.meta.requireUnAuth && store.getters.isAuthed) {
        next('/coaches')
    }
    else {
        next()
    }
})

export default router
