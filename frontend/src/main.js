import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './js/store.js';
import App from '@/App.vue';
import MainComp from './components/main/MainComp.vue';
import ProdComp from './components/sub/ProdComp.vue';
import GoodsComp from "./components/sub/GoodsComp.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: MainComp },
    { path: '/product/:type/:id', component: ProdComp },
    { path: '/goods/:cat1/:cat2/:cat3', component: GoodsComp },
];

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});