import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';
import store from './js/store.js';
import App from '@/App.vue';
import MainComp from './components/main/MainComp.vue';
import ProdComp from './components/sub/ProdComp.vue';
import GoodsComp from "./components/sub/GoodsComp.vue";

const routes = [
    { path: '/', component: MainComp },
    { path: '/product/:type/:id', component: ProdComp },
    { path: '/goods/:cat1/:cat2/:cat3', component: GoodsComp },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');