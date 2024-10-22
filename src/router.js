import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Articles from './pages/Articles.vue'; 
import Contact from './pages/Contact.vue'; 
import ToolsGuides from '@/pages/ToolsGuides.vue'


const routes = [
    {path: '/',  component: Home },
    {path: '/about', component: About},
    {path: '/articles', component: Articles},
    {path: '/contact', component: Contact},
    {path: '/tools-guides', component: ToolsGuides}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;