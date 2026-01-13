import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Services from '../views/Services.vue'
import CaseStudy from '../views/CaseStudy.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/services', component: Services },
    { path: '/case-study/:id', name: 'CaseStudy', component: CaseStudy, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const currentYear = new Date().getFullYear();

export { currentYear };

export default router;