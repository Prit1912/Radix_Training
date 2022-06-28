import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('../pages/home/index.vue')
    },
    {
        path: "/contact",
        name: 'Contact',
        component: () => import('../pages/contact/index.vue')
    },
    {
        path: '/contact-list',
        name: 'ContactList',
        component: () => import('../pages/contactList/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;