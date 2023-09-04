<template>
    <div>
        <!-- 상단영역 -->
        <header id="top">
            <!-- 속박스 -->
            <div class="top fxbx">
                <!-- GNB -->
                <nav>
                    <div class="gnb">
                        <!-- 1. 로고영역 -->
                        <div class="logo">
                            <router-link :to="{ path: '/' }">
                                <img src="/images/logo/logo.png" alt="메인로고"/>
                            </router-link>
                        </div>
                        <!-- 2. 카테고리영역 -->
                        <ul class="catbx">
                            <li class="on">
                                <router-link :to="{ path: '/product/all/new' }">
                                    NEW
                                </router-link>
                            </li>
                            <li class="on">
                                <router-link :to="{ path: '/product/all/best' }">
                                    BEST
                                </router-link>
                            </li>
                            <!-- sub-comp 출력되는 gnb -->
                            <li
                                class="tgGnb"
                                v-for="(v, i) in $store.state.gnb" :key="i">
                                <a href="#" v-on:click="chgData(i)">{{ i.toUpperCase() }}</a>
                            </li>
                            <li>
                                <a href="#" v-on:click.prevent="linkData('all', '기획전')">
                                    기획전
                                </a>
                            </li>
                            <NavComp />
                        </ul>
                    </div>
                    <!-- 3. 사이드 영역-->
                    <SideComp/>
                </nav>
            </div>
        </header>
        <!-- 라우팅된 컴포넌트 출력 -->
        <router-view></router-view>
    </div>
</template>

<script>
// 제이쿼리 불러오기
import $ from 'jquery';
// 스토어 불러오기
import store from '../src/js/store.js';
// 자식 컴포넌트
import NavComp from './components/common/NavComp.vue';
import SideComp from './components/common/SideComp.vue';
// 공통 CSS
import '../src/scss/common.scss';

export default {
    name: 'LayoutComp',
    components: {
        NavComp,
        SideComp,
    },
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
    },
    mounted() {
        // gnb 클릭시 li에 클래스 on
        $('.catbx > .tgGnb').click(function (e) {
            // 기본기능막기
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            $('.top').addClass('on');
        }); ///////// click ////////////

        // 마우스아웃시 전체 클래스 빼기
        $('nav').mouseleave(function () {
            $('.top').removeClass('on');
            $('.catbx > .tgGnb').removeClass('on');
        }); ///////// mouseleave //////////
    },
};
</script>
