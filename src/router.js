import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Articles from './pages/Articles.vue'; 

const routes = [
    {path: '/',  component: Home },
    {path: '/about', component: About},
    {path: '/articles', component: Articles}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;