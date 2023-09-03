<!-- SubComp dt/dd 클릭시 출력되는 상품리스트 템플릿 -->
<template>
    <div>
        <!-- 메인영역 -->
        <main id="cont">
            <!-- 속박스 -->
            <div class="cont">
                <!-- 상품리스트 영역 -->
                <div id="goodsComp">
                    <div class="container">
                        <div class="pagewrap">
                            <!-- 상단영역 -->
                            <div class="prd_top">
                                <!-- 타이틀 -->
                                <div class="cate_main_tit">
                                    <h3>{{ this.$route.params.cat1.toUpperCase() }}</h3>
                                    <span>{{ this.$route.params.cat2.toUpperCase() }}</span>
                                    <!-- lnb 데이터 -->
                                    <div class="catmenu">
                                        <a href="#" v-on:click="setCatnum('전체')">
                                            <span>전체</span>
                                        </a>
                                        <a href="#" v-for="(v, n) in $store.state.setlnb" :key="n" v-on:click="setCatnum(v)">
                                            <span>{{ v }}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- 상품옵션 선택박스 -->
                            <div class="prd-cat-option">
                                <!-- 상품정렬 탭 -->
                                <ul class="option-left">
                                    <li class="filter_option" v-on:click="sortList('catnum')">
                                        <a href="#">신상품순</a>
                                    </li>
                                    <li class="filter_option" v-on:click="sortList('dprice')">
                                        <a href="#">낮은가격순</a>
                                    </li>
                                    <li class="filter_option" v-on:click="sortList('dprice')">
                                        <a href="#">높은가격순</a>
                                    </li>
                                    <li class="filter_option" v-on:click="sortList('review')">
                                        <a href="#">상품평순</a>
                                    </li>
                                </ul>
                                <div class="option-right">
                                    <!-- 상품카운트 박스 -->
                                    <div class="prd_count">
                                        <p>
                                            <strong>{{ $store.state.pdlength }}</strong>
                                            items
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 상품리스트 박스 -->
                            <div class="prdbx">
                                <div class="prdwrap">
                                    <!-- 상품리스트 -->
                                    <ul class="ui-col4">
                                        <template v-for="(v, i) in $store.state.imgpath">
                                            <template v-if="$store.state.curUrl2 === i || $store.state.curUrl2 === '전체'">
                                                <li v-for="a in v" :key="a.name" @click.prevent="getData(a)" v-on:mouseover="handleMouseOver" v-on:mouseleave="handleMouseLeave">
                                                    <div class="ui-prod-bx">
                                                        <a href="#">
                                                            <div class="prod-detail-img">
                                                                <img :src="'/images/goods/' + $store.state.curUrl0 + '/' + a.img + '.jpg'" :alt="a.name"/>
                                                            </div>
                                                        </a>
                                                        <div title="찜하기" class="product_like" v-on:click="addWish(a, 1)">
                                                            <button type="button" class="fa-solid fa-heart"></button>
                                                        </div>
                                                    </div>
                                                    <div class="item-detail">
                                                        <div class="prod_txt">
                                                            <strong class="brand">슈펜</strong>
                                                            <p>{{ a.name }}</p>
                                                        </div>
                                                        <span class="original-price">
                                                            <em>{{ setComma(a.oprice) }}</em>
                                                            <span v-if="a.oprice">원</span>
                                                        </span>
                                                        <br />
                                                        <span class="discount-price">
                                                            <em>{{ setComma(a.dprice) }}</em>
                                                            <span>원</span>
                                                        </span>
                                                        <span class="percent-price" v-if="a.oprice && a.dprice">
                                                            <em>{{ setDiscount(a.oprice,a.dprice) }}</em>
                                                        </span>
                                                        <div class="box_grade">
                                                            <div class="star">
                                                                <span v-if="a.review">{{ '(' + a.review + ')' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </template>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 여기부터 디테일페이지! -->
                    <DetailComp v-if="showDt" :style="compStyle" :detData="showDt"/>
                </div>
            </div>
        </main>
        <!-- 하단영역 -->
        <footer id="info">
            <!-- 속박스 -->
            <div class="info">
                <!-- 푸터영역 -->
                <FootComp />
                <p class="f_copyright">
                    COPYRIGHT © WONDERPLACE ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
// 자식 컴포넌트
import FootComp from '../common/FootComp.vue';
import DetailComp from './DetailComp.vue';
// 공통기능함수
import crossMixin from '@/js/common.js';
// 스토어 불러오기
import store from '@/js/store.js';
// 제이쿼리 불러오기
import $ from 'jquery';
// 디테일페이지 CSS
import "../../css/detail.css";

export default {
    name: 'GoodsComp',
    mixins: [crossMixin],
    components: {
        FootComp,
        DetailComp,
    },
    data() {
        return {
            showDt: false,
        };
    },
    computed: {
        // 상세페이지 조건부 렌더링
        compStyle() {
            return {
                visibility: this.showDt ? 'visible' : 'hidden',
                opacity: this.showDt ? 1 : 0,
                transition: this.showDt ? '0.3s ease' : '0s ease', 
            };
        },
    },
    created() {
        // 소분류 메뉴출력을 위한 변수
        store.state.imgpath = store.state.gnb[this.$route.params.cat1].items[this.$route.params.cat2];
        store.state.curUrl0 = this.$route.params.cat1;
        store.state.curUrl1 = this.$route.params.cat2;
        store.state.curUrl2 = this.$route.params.cat3;

        // 함수호출!
        this.initSetSubSrc();
    },
    methods: {
        getData(pm) {
            // [ 스토어 전역변수에 업데이트! ]
            // 기본정보 데이터
            store.state.dtname = pm['name'];
            store.state.dtimg = pm['img'];
            store.state.dtoprice = pm['oprice'];
            store.state.dtdprice = pm['dprice'];
            store.state.dtcolor = pm['color'];
            store.state.dtsize = pm['size'];
            // 썸네일 데이터
            store.state.dtsumimg2 = pm['sumimg2'];
            store.state.dtsumimg3 = pm['sumimg3'];

            // 디테일박스 열기
            this.showDt = true;
        },
        // lnb클릭시 v-if 조건값 설정하는 메서드
        setCatnum(num) {
            store.state.catnum = num;
            store.state.curUrl2 = num;

            // 이벤트 버블링 막기
            $('.product_like').click(function (e) {
                e.stopPropagation();
            });

            // 상품 길이값 업데이트!
            this.pdLength();
        },
        // 상품리스트 오버시 이미지src 변경
        handleMouseOver(event) {
            const tgImg = $(event.currentTarget).find(
                'div > a > .prod-detail-img > img',
            );
            const tgSrc = tgImg.attr('src');
            // 이미지src에 '_on' 없는 경우만 변경하기
            if (tgSrc.indexOf('_on') === -1) {
                const newSrc = tgSrc.split('.jpg')[0] + '_on.jpg';
                tgImg.attr('src', newSrc);
            }
        },
        // 상품리스트 리브시 기존 이미지로 변경
        handleMouseLeave(event) {
            const tgImg = $(event.currentTarget).find(
                'div > a > .prod-detail-img > img',
            );
            const tgSrc = tgImg.attr('src');
            const prevSrc = tgSrc.split('_on.jpg')[0] + '.jpg';
            tgImg.attr('src', prevSrc);
        },
        // 상품 갯수 카운트 함수
        pdLength() {
            this.$nextTick(() => {
                const length = $('.ui-col4 > li').length;
                store.state.pdlength = length;
            });
        },
        // 서브페이지 최상위 경로 설정해주는 함수
        initSetSubSrc() {
            // 중분류 데이터값에 따라 lnb 데이터 변경!
            let catval = this.$route.params.cat2;
            // 각 카테고리별 lnb 대분류 경로 설정
            switch (catval) {
                case 'shoes':
                    store.state.setlnb =
                        store.state.gnb[this.$route.params.cat1].dpt1;
                    break;
                case 'bag':
                    store.state.setlnb =
                        store.state.gnb[this.$route.params.cat1].dpt2;
                    break;
                case 'ac':
                    store.state.setlnb =
                        store.state.gnb[this.$route.params.cat1].dpt3;
                    break;
            }
        },
        // 경로 일치 lnb on 넣기 함수
        initCatnum() {
            // lnb 텍스트 저장 변수
            const ary = $('.catmenu > a > span');

            // 각 변수에 셋팅하기
            ary.each(function (idx, ele) {
                // url 경로 일치할 경우 클릭이벤트 강제발생 / 클래스 on넣기/빼기
                if ($(ele).text() === store.state.curUrl2) {
                    // 트리거 셋팅
                    $(this).parent().trigger('click').addClass('on').siblings().removeClass('on');
                }
            });
        },
    },
    mounted() {
        // lnb 메뉴 클릭시 클래스 on 추가/제거
        $('.catmenu > a').click(function (e) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            let menuTxt = $(this).text();

            // !!! URL 강제 변경하기
            // 변경이유 : SPA 변경시 전달변수 내용일치 -> 새로고침시 현재변경로딩!
            history.pushState(null,null,`/goods/${store.state.curUrl0}/${store.state.curUrl1}/${menuTxt}`);
        }); ////////// click ///////////

        // 최초호출!
        this.pdLength();
        this.initCatnum();
    },
};
</script>