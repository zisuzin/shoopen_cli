<template>
    <div>
        <!-- 상단영역 -->
        <header id="top">
            <!-- 속박스 -->
            <div class="top fxbx">
                <!-- GNB -->
                <nav>
                    <!-- MO GNB 메뉴 -->
                    <div class="mo_menu">
                        <img src="/images/icon/ico_ctg_black.png" alt="모바일메뉴">
                        <div class="accordion" id="accordionDepth1">
                            <!-- WOMEN / depth1 -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        WOMEN
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <ul class="accordion-body">
                                        <li>신상</li>
                                        <li>베스트</li>
                                        <!-- depth2 -->
                                        <div class="accordion" id="accordionDepth2">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        여성신발
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#depth2Accordion">
                                                    <ul class="accordion-body">
                                                        <li>플랫슈즈</li>
                                                        <li>샌들</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <!-- 아코디언 메뉴 : KIDS -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    KIDS
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>  
                    </div>
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
                            <NavComp />
                        </ul>
                    </div>
                    <!-- 3. 사이드 영역-->
                    <SideComp/>
                </nav>
                <!-- 3-1. 로그인/가입 컴포넌트 -->
                <LoginComp/>
                <!-- 3-2. 위시리스트 컴포넌트 -->
                <WishComp/>
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
// 부트스트랩 불러오기
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
// 자식 컴포넌트
import NavComp from './components/common/NavComp.vue';
import SideComp from './components/common/SideComp.vue';
import LoginComp from './components/common/LoginComp.vue';
import WishComp from './components/common/WishComp.vue';
// 공통 CSS
import '../src/scss/common.scss';

export default {
    name: 'LayoutComp',
    components: {
        NavComp,
        SideComp,
        LoginComp,
        WishComp,
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
