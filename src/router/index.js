import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/home/Home.vue";
import Test from "@/Test.vue";
import Index from "@/components/index/Index.vue";

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/:sub', component: Index},
    {path: '/home/:sub', component: Home},
    {path: '/test', component: Test},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === '/home/front' && from.path === '/login') {
        to.meta.data = {name: from.meta.name}
    }
    next();
})

export default router