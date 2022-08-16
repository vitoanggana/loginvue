import { createRouter, createWebHistory } from 'vue-router'

import loginForm from '../components/login.vue'
import registerForm from '../components/register.vue'

const routes = [
    {
        path:'/',
        component: loginForm
    },
    {
        path:'/register',
        component: registerForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router