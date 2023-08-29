import Vue from 'vue'
import VueRouter from "vue-router";
// 스토어 불러오기
import store from './js/store.js'; 
// 컴포넌트
import App from '@/App.vue'
import MainComp from "./components/MainComp.vue";
import ProdComp from "./components/ProdComp.vue";

// router 기능 확장 선언
Vue.use(VueRouter);

// router 등록
const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '', component: MainComp },
      { path: '/product/:text', component: ProdComp },
    ],
  },
];

// router 객체생성
const router = new VueRouter({
  // 라우터 모드 설정
  mode: 'history', 
  routes,
});

// root 인스턴스
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
