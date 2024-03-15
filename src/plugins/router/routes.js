import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/product/:code',
                name: 'product',
                component: () => import('@/views/product.vue')
            }
        ]


    },

];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;


