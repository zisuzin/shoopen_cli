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
                                    <div class="tit_depth1">
                                        <h3>{{ this.$route.params.cat1.toUpperCase() }}</h3>
                                        <span>{{ this.$route.params.cat2.toUpperCase() }}</span>
                                    </div>
                                    <!-- lnb 데이터 -->
                                    <div class="catmenu tit_depth2">
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
                                <!-- MO 상품정렬 탭 -->
                                <label class="mo_sorting">
                                    <select id="sort_btn">
                                        <option value="new_order">신상품순</option>
                                        <option value="low_order">낮은가격순</option>
                                        <option value="high_order">높은가격순</option>
                                        <option value="review_order">상품평순</option>
                                    </select>
                                </label>
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
                                    <!-- 상품필터 검색박스 -->
                                    <div class="prd_filter_bx" v-if="$store.state.curUrl2 !== '전체'">
                                        <button type="button">
                                            <span>필터</span>
                                        </button>
                                        <div class="filter_layer">
                                            <div class="filter_search">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>사이즈</th> 
                                                            <td>
                                                                <ul class="filter_size">
                                                                    <li v-for="(v,i) in $store.state.gnb[$store.state.curUrl0][$store.state.curUrl1][$store.state.curUrl2].size" :key="i">
                                                                        <span class="chkbx">
                                                                            <input type="checkbox" id="depth_1" name="depth_1"/>
                                                                            <span></span>
                                                                        </span>
                                                                        <label for="depth_1">{{v}}</label>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>색상</th>
                                                            <td>
                                                                <ul class="filter_color">
                                                                    <li v-for="(v,i) in $store.state.gnb[$store.state.curUrl0][$store.state.curUrl1][$store.state.curUrl2].color" :key="i">
                                                                        <div>
                                                                            <button type="button" :style="{ backgroundColor: v.split('^')[0] }"></button>
                                                                            <span>{{v.split('^')[1]}}</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>가격</th>
                                                            <td>
                                                                <div class="filter_price">
                                                                    <div class="slider">
                                                                        <div class="progress"></div>
                                                                        <div class="range_input">
                                                                            <input type="range" min="0" max="100" value="0" step="20" class="ui_slider_start" name="slider_start"/>
                                                                            <input type="range" min="0" max="100" value="100" step="20" class="ui_slider_end" name="slider_end"/>
                                                                        </div>
                                                                        </div>
                                                                    <div id="filter_price_view">
                                                                        <input class="input_min" name="price_min" type="number" value="0"/>
                                                                        만원 ~
                                                                        <input class="input_max" name="price_max" type="number" value="100"/>
                                                                        만원
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="btn_wrap">
                                                <a href="#" class="btn_style01">초기화</a>
                                                <a href="#" class="btn_style02">검색</a>
                                            </div>
                                            <button type="button" class="close_btn" title="필터 닫기">
                                                <span>필터</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 상품리스트 박스 -->
                            <div class="prdwrap">
                                <!-- 상품리스트 -->
                                <ul class="ui-col4">
                                    <template v-for="(v, i) in $store.state.imgpath">
                                        <template v-if="$store.state.curUrl2 === i || $store.state.curUrl2 === '전체'">
                                            <li v-for="a in v" :key="a.name" @click.prevent="getData(a)" v-on:mouseover="handleMouseOver" v-on:mouseleave="handleMouseLeave">
                                                <div class="ui-prod-bx">
                                                    <a href="#">
                                                        <div class="prod-detail-img">
                                                            <img :src="'/images/goods/'+ a.img + '.jpg'" :alt="a.name"/>
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
                    <!-- 여기부터 디테일페이지! -->
                    <DetailComp v-if="showDt" :style="compStyle" @close-detail="closeDetail"/>
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
// 서브페이지 CSS
import "../../scss/sub.scss";

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
        closeDetail() {
            this.showDt = false;
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
            const tgImg = $(event.currentTarget).find('div > a > .prod-detail-img > img');
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
        // 가격필터링 메서드
        moveSl() {
            const tgsl = document.querySelectorAll(".range_input > input");
            const priceInput = document.querySelectorAll("#filter_price_view > input");
            const progress = document.querySelector(".slider > .progress");

            let priceGap = 10;

            tgsl.forEach((ele) => {
                // 슬라이드 조작시 이벤트 발생
                ele.addEventListener("input", (e) => {
                let minVal = parseInt(tgsl[0].value);
                let maxVal = parseInt(tgsl[1].value);

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "input_min") {
                    tgsl[0].value = maxVal - priceGap;
                    } ////// if //////
                    else {
                    tgsl[1].value = minVal + priceGap;
                    } ////// else //////
                } ////// if //////
                else {
                    // 이동된 값 만큼 가격으로 출력!
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    // 프로그레스바 너비 변경
                    progress.style.left = (minVal / tgsl[0].max) * 100 + "%";
                    progress.style.right = 100 - (maxVal / tgsl[1].max) * 100 + "%";
                } ////// else //////
                }); //////// input //////////
            }); ////// forEach ///////
        }, /////// moveSl ///////
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

        // 필터 버튼 클릭시 상품카테고리 선택박스 보이기
        $(".prd_filter_bx > button").click(function () {
            $(".filter_layer").css("display", "block");
        }); 

        // 상품카테고리 닫기버튼 클릭시 선택박스 닫힘
        $(".filter_layer > button").click(function () {
            $(this).parent().css("display", "none");
        }); ///////// click ////////////

        // 색상 선택 버튼 클릭시 클래스 on
        $(".filter_color > li").click(function () {
            $(this).toggleClass("on");
        }); ///////// click ////////////

        // 최초호출!
        this.pdLength();
        this.initCatnum();
        this.moveSl();
    },
};
</script>