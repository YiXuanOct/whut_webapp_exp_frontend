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

export default router