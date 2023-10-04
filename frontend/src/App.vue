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
                            <ul class="nbmenu_btn">
                                <li v-on:click.prevent="linkData('all', 'new')">
                                    NEW
                                </li>
                                <li v-on:click.prevent="linkData('all', 'best')">
                                    BEST
                                </li>
                            </ul>
                            <!-- depth1 / WOMEN -->
                            <div class="accordion-item wsCol">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#wsColOne" aria-expanded="true" aria-controls="wsColOne">
                                        WOMEN
                                    </button>
                                </h2>
                                <div id="wsColOne" class="accordion-collapse collapse" data-bs-parent="#accordionDepth1">
                                    <ul class="accordion-body">
                                        <li v-on:click.prevent="linkData('women', 'new')">신상</li>
                                        <li v-on:click.prevent="linkData('women', 'best')">베스트</li>
                                        <!-- depth2 / 신발 -->
                                        <div class="accordion" id="wsColTwo">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#wsColThree" aria-expanded="false" aria-controls="wsColThree">
                                                        여성신발
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="wsColThree" class="accordion-collapse collapse" data-bs-parent="#wsColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('women', 'shoes', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('women', 'shoes', '플랫슈즈')">플랫슈즈</li>
                                                        <li v-on:click.prevent="linksys('women', 'shoes', '샌들')">샌들</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- depth2 / 가방 -->
                                        <div class="accordion" id="wsColTwo2">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#wsColThree2" aria-expanded="false" aria-controls="wsColThree2">
                                                        여성가방
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="wsColThree2" class="accordion-collapse collapse" data-bs-parent="#wsColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('women', 'bag', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('women', 'bag', '백팩')">백팩</li>
                                                        <li v-on:click.prevent="linksys('women', 'bag', '미니백')">미니백</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- depth2 / 잡화 -->
                                        <div class="accordion" id="wsColTwo3">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#wsColThree3" aria-expanded="false" aria-controls="wsColThree3">
                                                        여성잡화
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="wsColThree3" class="accordion-collapse collapse" data-bs-parent="#wsColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('women', 'ac', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('women', 'ac', '양말')">양말</li>
                                                        <li v-on:click.prevent="linksys('women', 'ac', '모자')">모자</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <!-- depth1 / MEN -->
                            <div class="accordion-item msCol">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#msColOne" aria-expanded="true" aria-controls="msColOne">
                                        MEN
                                    </button>
                                </h2>
                                <div id="msColOne" class="accordion-collapse collapse" data-bs-parent="#accordionDepth1">
                                    <ul class="accordion-body">
                                        <li v-on:click.prevent="linkData('men', 'new')">신상</li>
                                        <li v-on:click.prevent="linkData('men', 'best')">베스트</li>
                                        <!-- depth2 / 신발 -->
                                        <div class="accordion" id="msColTwo">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#msColThree" aria-expanded="false" aria-controls="msColThree">
                                                        남성신발
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="msColThree" class="accordion-collapse collapse" data-bs-parent="#msColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('men', 'shoes', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('men', 'shoes', '스니커즈')">스니커즈</li>
                                                        <li v-on:click.prevent="linksys('men', 'shoes', '슬리퍼')">슬리퍼</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- depth2 / 가방 -->
                                        <div class="accordion" id="msColTwo2">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#msColThree2" aria-expanded="false" aria-controls="msColThree2">
                                                        남성가방
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="msColThree2" class="accordion-collapse collapse" data-bs-parent="#msColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('men', 'bag', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('men', 'bag', '맨즈백')">맨즈백</li>
                                                        <li v-on:click.prevent="linksys('men', 'bag', '크로스백')">크로스백</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- depth2 / 잡화 -->
                                        <div class="accordion" id="msColTwo3">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#msColThree3" aria-expanded="false" aria-controls="msColThree3">
                                                        남성잡화
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="msColThree3" class="accordion-collapse collapse" data-bs-parent="#msColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('men', 'ac', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('men', 'ac', '양말')">양말</li>
                                                        <li v-on:click.prevent="linksys('men', 'ac', '모자')">모자</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <!-- depth1 / KIDS -->
                            <div class="accordion-item ksCol">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ksColOne" aria-expanded="true" aria-controls="ksColOne">
                                        KIDS
                                    </button>
                                </h2>
                                <div id="ksColOne" class="accordion-collapse collapse" data-bs-parent="#accordionDepth1">
                                    <ul class="accordion-body">
                                        <li v-on:click.prevent="linkData('kids', 'new')">신상</li>
                                        <li v-on:click.prevent="linkData('kids', 'best')">베스트</li>
                                        <!-- depth2 / 신발 -->
                                        <div class="accordion" id="ksColTwo">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#ksColThree" aria-expanded="false" aria-controls="ksColThree">
                                                        아동신발
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="ksColThree" class="accordion-collapse collapse" data-bs-parent="#ksColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('kids', 'shoes', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('kids', 'shoes', '구두')">구두</li>
                                                        <li v-on:click.prevent="linksys('kids', 'shoes', '샌들')">샌들</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- depth2 / 가방 -->
                                        <div class="accordion" id="ksColTwo2">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#ksColThree2" aria-expanded="false" aria-controls="ksColThree2">
                                                        아동가방
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="ksColThree2" class="accordion-collapse collapse" data-bs-parent="#ksColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('kids', 'bag', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('kids', 'bag', '슬리퍼가방')">슬리퍼가방</li>
                                                        <li v-on:click.prevent="linksys('kids', 'bag', '패션가방')">패션가방</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- depth2 / 잡화 -->
                                        <div class="accordion" id="ksColTwo3">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button dpt2" type="button" data-bs-toggle="collapse" data-bs-target="#ksColThree3" aria-expanded="false" aria-controls="ksColThree3">
                                                        아동잡화
                                                    </button>
                                                </h2>
                                                <!-- depth3 -->
                                                <div id="ksColThree3" class="accordion-collapse collapse" data-bs-parent="#ksColOne">
                                                    <ul class="accordion-body dpt3">
                                                        <li v-on:click.prevent="linksys('kids', 'ac', '전체')">전체</li>
                                                        <li v-on:click.prevent="linksys('kids', 'ac', '양말')">양말</li>
                                                        <li v-on:click.prevent="linksys('kids', 'ac', '모자')">모자</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
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
                            <li>
                                <router-link :to="{ path: '/product/all/new' }">
                                    NEW
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ path: '/product/all/best' }">
                                    BEST
                                </router-link>
                            </li>
                            <!-- sub-comp 출력되는 gnb -->
                            <li class="tgGnb" v-for="(v, i) in $store.state.gnb" :key="i">
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
// 공통기능함수
import crossMixin from "./js/common.js";
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
    mixins: [crossMixin],
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

        // MO 햄버거 버튼 클릭시 .moMenu on 클래스 유무에 따라 메뉴 보임/숨김 
        function chgMoVer() {
            $('.mo_menu > img').click(function() {
                const moMenu = $('#accordionDepth1');
                moMenu.toggleClass("on");
                if (moMenu.hasClass("on")) {
                    moMenu.css("display", "block");
                    $('.logo').css("display", "none");
                }
                else {
                    moMenu.css("display", "none");
                    $('.logo').css("display", "block");
                }
            });
        }
        // 최초호출!
        chgMoVer();
    },
};
</script>
