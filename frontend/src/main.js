import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';
import store from './js/store.js';
import App from '@/App.vue';
import MainComp from './components/main/MainComp.vue';
import ProdComp from './components/sub/ProdComp.vue';
import GoodsComp from "./components/sub/GoodsComp.vue";
// import FitText from 'vue-fit-text/index.js';

const routes = [
    { path: '/', component: MainComp },
    { path: '/product/:type/:id', component: ProdComp },
    { path: '/goods/:cat1/:cat2/:cat3', component: GoodsComp },
];

const router = createRouter({
    history: createWebHistory(), // 해시태그 방지
    routes,
    scrollBehavior(){
        return { top: 0 } // 스크롤 위치 상단 이동
    },
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');