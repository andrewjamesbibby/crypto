import home from './components/home.vue';
import crypto from './components/crypto/crypto.vue';
import chat from './components/chat.vue';
import chart from './components/chart.vue';
import response from './components/response.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const routes = [
    {
        path: '/',
        component: crypto
    },
    {
        path: '/crypto',
        component: crypto,
        name: 'crypto'
    },
    {
        path: '/chat',
        component: chat,
        name: 'chat'
    },
    {
        path: '/chart',
        component: chart,
        name: 'chart'
    },
    {
        path: '/response',
        component: response,
        name: 'response'
    }
]


export default routes;

