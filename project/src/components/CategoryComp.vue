<template>
  <ul class="catbx">
    <li>
      <a href="#" v-on:click.prevent="linkData('all', 'new')">NEW</a>
    </li>
    <li>
      <a href="#" v-on:click.prevent="linkData('all', 'best')">BEST</a>
    </li>
    <!-- sub-comp 출력되는 gnb -->
    <li class="tgGnb" v-for="(v, i) in $store.state.gnb" :key="i">
      <a href="#" v-on:click="chgData(i)">{{ i.toUpperCase() }}</a>
    </li>
    <!-- 여기까지 -->
    <li>
      <a href="#" v-on:click.prevent="linkData('all', '기획전')">기획전</a>
    </li>
    <sub-comp></sub-comp>
  </ul>
</template>

<script>
// 스토어 불러오기
import store from '../js/store.js';
import SubComp from './SubComp.vue';

export default {
  name: "CategoryComp",
  methods: {
    // v-on 클릭시 gnb sub-comp 데이터 변경 발생
    chgData(parm) {
      event.preventDefault();

      // gnb에서 파라미터 받아오기
      store.state.lnbsrc = parm;

      // [ 업데이트!! ]
      // dd박스
      store.state.setsubtit1 = store.state.gnb[parm].subtit[0];
      store.state.setsubtit2 = store.state.gnb[parm].subtit[1];
      store.state.setsubtit3 = store.state.gnb[parm].subtit[2];
      store.state.setsubtit4 = store.state.gnb[parm].subtit[3];
      store.state.setsubtit5 = store.state.gnb[parm].subtit[4];
      store.state.setdpt1 = store.state.gnb[parm].dpt1;
      store.state.setdpt2 = store.state.gnb[parm].dpt2;
      store.state.setdpt3 = store.state.gnb[parm].dpt3;
    },
    // new, best 클릭 전용 링크시스템
    linkData(pm1, pm2) {
      location.href = "prod.html?cat=" + pm1 + "&" + pm2;
    },
  },
};
</script>

<style scoped>
</style>
