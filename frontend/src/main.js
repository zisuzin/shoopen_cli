import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; 
// 스토어 불러오기
import store from './js/store.js';
// 컴포넌트
import App from '@/App.vue';
import MainComp from './components/MainComp.vue';
import ProdComp from './components/ProdComp.vue';
import GoodsComp from "./components/GoodsComp.vue"

// router 등록
const routes = [
    { path: '/', component: MainComp },
    { path: '/product/all/:id', component: ProdComp },
    { path: '/goods/:cat1/:cat2/:cat3', component: GoodsComp },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// root 인스턴스
const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app');
