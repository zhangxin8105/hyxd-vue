import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '@/components/home';
import index from '@/components/index';
import record from '@/components/record';
import weekly from '@/components/weekly';
import notFound from '@/components/notFound';

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/index',
            name: 'index',
            component: index,
        },
        {
            path: '/record',
            name: 'record',
            component: record,
        },
        {
            path: '/weekly',
            name: 'weekly',
            component: weekly,
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound,
        }
    ],
});

export default router;