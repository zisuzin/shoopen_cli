import Vue from 'vue'
import VueRouter from "vue-router";
import CategoryComp from "../components/CategoryComp.vue";

// router 기능 확장 선언
Vue.use(VueRouter);

// router 등록
const routes = [
  {
    path: "/product",
    component: CategoryComp,
  },
];

// router 객체생성
const router = new VueRouter({
  routes,
});

export default router;
