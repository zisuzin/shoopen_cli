// 라우터 & 인스턴스 셋업용 모듈
import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
// store 불러오기
import store from './js/store.js';
// 라우팅 컴포넌트
import MainComp from './components/main/MainComp.vue';
import ProdComp from './components/sub/ProdComp.vue';
import GoodsComp from "./components/sub/GoodsComp.vue";
import BoardComp from "./components/sub/BoardComp.vue";

const routes = [
    { path: '/', component: MainComp },
    { path: '/product/:type/:id', component: ProdComp },
    { path: '/goods/:cat1/:cat2/:cat3', component: GoodsComp },
    { path: '/board', component: BoardComp },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // 해시태그 방지
    routes,
    scrollBehavior(){
        return { top: 0 } // 스크롤 위치 상단 이동
    },
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');