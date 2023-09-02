<!-- SubComp dt/dd 클릭시 출력되는 상품리스트 템플릿 -->
<template>
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
                <div class="dt-comp" v-if="showDt" :style="compStyle">
                    <div class="detailbx">
                        <div class="dtsec1">
                            <!-- 이미지 배너 박스 -->
                            <div class="detail_img">
                                <!-- 슬라이드 이미지 -->
                                <swiper class="swiper mySwiper1">
                                    <swiper-slide>
                                        <img :src="'/images/goods/' + this.$route.params.cat1 + '/' +$store.state.dtimg + '.jpg'" alt="썸네일 대표이미지"/>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <img :src="'/images/goods/' + this.$route.params.cat1 + '/' + this.$route.params.cat2 + '/' + $store.state.dtsumimg2 + '.jpg'" alt="썸네일 상세이미지1"/>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <img :src="'/images/goods/' + this.$route.params.cat1 + '/' + this.$route.params.cat2 + '/' + $store.state.dtsumimg3 + '.jpg'" alt="썸네일 상세이미지2"/>
                                    </swiper-slide>
                                    <div class="swiper-button-next swbtn"></div>
                                    <div class="swiper-button-prev swbtn"></div>
                                </swiper>
                                <!-- 썸네일 리스트 -->
                                <swiper class="swiper mySwiper2">
                                    <swiper-slide>
                                        <img :src="'/images/goods/' + this.$route.params.cat1 + '/' + $store.state.dtimg + '.jpg'" alt="썸네일 상세이미지1"/>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <img :src="'/images/goods/' + this.$route.params.cat1 + '/' + this.$route.params.cat2 + '/' + $store.state.dtsumimg2 + '.jpg'" alt="썸네일 상세이미지2"/>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <img :src="'/images/goods/' +this.$route.params.cat1 +'/' +this.$route.params.cat2 +'/' +$store.state.dtsumimg3 +'.jpg'" alt="썸네일 상세이미지3"/>
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <!-- 구매 인터페이스 영역 -->
                            <div class="detail_buy">
                                <div class="buyarea">
                                    <dl>
                                        <dt>{{ $store.state.dtname }}</dt>
                                        <dd class="price_wrap">
                                            <div class="price">
                                                <div class="txt-def">
                                                    <em>{{ setComma($store.state.dtoprice) }}
                                                        <span v-if="$store.state.dtoprice">원</span>
                                                    </em>
                                                </div>
                                                <div class="txt-dsc">
                                                    <em>{{ setComma($store.state.dtdprice) }}</em>
                                                    <span>원</span>
                                                    <span class="txt-percent">
                                                        <em>{{ setDiscount($store.state.dtoprice, $store.state.dtdprice) }}</em>
                                                    </span>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="box_grade">
                                            <div class="star">
                                                <span>(29)</span>
                                            </div>
                                        </dd>
                                        <dd class="buy_option">
                                            <ul>
                                                <li class="color">
                                                    <em>색상</em>
                                                    <div class="copt">
                                                        <div class="option_inner option_color" @click="openCat()">
                                                            <span>색상 옵션을 선택해주세요.</span>
                                                        </div>
                                                        <div class="option_list coloropt">
                                                            <ul>
                                                                <li v-for="(a, b) in $store.state.dtcolor" :key="b">
                                                                    <span>{{ a }}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="size">
                                                    <em>사이즈</em>
                                                    <div class="copt">
                                                        <div class="option_inner option_size">
                                                            <span>사이즈 옵션을 선택해주세요.</span>
                                                        </div>
                                                        <div class="option_list sizeopt">
                                                            <ul>
                                                                <li v-for="(a, b) in $store.state.dtsize" :key="b">
                                                                    <span>{{ a }}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                        <!-- 최종 결제 상품박스 영역 -->
                                        <div class="dtfinal_bx">
                                            <ul>
                                                <li>
                                                    <div class="opt_name">
                                                        {{ '[택배배송] ' + $store.state.pickcolor + '/' + $store.state.picksize }}
                                                    </div>
                                                    <div class="opt_num">
                                                        <a href="#" role="button" class="minus" v-on:click.prevent="minusBtn()">수량감소</a>
                                                        <a href="#" role="button" class="plus" v-on:click.prevent="plusBtn()">수량증가</a>
                                                        <label>
                                                            <input type="number" class="num" title="수량" value="1"/>
                                                        </label>
                                                    </div>
                                                    <div class="opt_price">
                                                        <strong>{{ setComma($store.state.dtdprice) }}</strong>원
                                                    </div>
                                                    <span class="opt_del">
                                                        <i class="fa-solid fa-xmark"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="dttot_bx">
                                            <span class="tot_txt">총 합계</span>
                                            <span class="tot_price">
                                                <strong>{{ setComma(Number($store.state.dtdprice) * $store.state.result) }}</strong>
                                                원
                                            </span>
                                        </div>
                                        <div class="dtbtn">
                                            <a href="#">CART</a>
                                            <a href="#">BUY</a>
                                        </div>
                                        <div class="dtbtn clbtn" @click.prevent="closeDetail">
                                            <a href="#">
                                                CLOSE
                                                <i class="fa-solid fa-xmark"></i>
                                            </a>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
</template>

<script>
import FootComp from '../common/FootComp.vue';
// 공통기능함수
import crossMixin from '@/js/common.js';
// 스토어 불러오기
import store from '@/js/store.js';
// 제이쿼리 불러오기
import $ from 'jquery';
// 디테일페이지 CSS
import "../../css/detail.css";
import swiperFn from "../../js/swiper.js";
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    name: 'GoodsComp',
    mixins: [crossMixin],
    components: {
        FootComp,
        Swiper,
        SwiperSlide,
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
            swiperFn();
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
        // 더하기함수
        plusBtn() {
            let num = $(".opt_num input").val();
            num++;
            // 업데이트
            $(".opt_num input").val(num);
            store.state.result = num;
        },
        // 빼기함수
        minusBtn() {
            let num = $(".opt_num input").val();
            num--;
            if (num === 0) return;
            // 업데이트
            $(".opt_num input").val(num);
            store.state.result = num;
        },
        // 카테고리 보이기 메서드
        openCat() {
            const opt1 = $(".option_color");
            const opt2 = $(".option_size");
    
            // 클래스 유무로 컬러옵션 보이기/숨김
            opt1.toggleClass("on");
            opt1.is(".on") ? opt1.siblings().css("display", "block") : opt1.siblings().css("display", "none");
    
            opt1.siblings().find("li").click(function () {
                $(this).addClass("on").siblings().removeClass("on");
                const tgcolor = $(this).text();
                // li에 클래스 on 되면 부모박스 클래스 제거, 옵션창 닫음, 안내문구 텍스트 변경
                if ($(this).is(".on")) {
                $(".coloropt").css("display", "none") && opt1.removeClass("on") && $(".option_color > span").text(tgcolor);
                }
    
                // .coloropt li 클릭후 opt2 클릭시
                opt2.click(function () {
                opt2.toggleClass("on");
                opt2.is(".on") ? opt2.siblings().css("display", "block") : opt2.siblings().css("display", "none");
                opt2.siblings().find("li").click(function () {
                    $(this).addClass("on").siblings().removeClass("on");
                    const tgsize = $(this).text();
    
                    if ($(this).is(".on")) {
                        $(".sizeopt").css("display", "none") &&
                        opt2.removeClass("on") &&
                        $(".option_color > span").text("색상 옵션을 선택해주세요.") &&
                        // 최종 결제 옵션/금액 박스 보이기
                        $(".dtfinal_bx").css("display", "block") &&
                        $(".dttot_bx").css("display", "block");
                        // 선택한 색상/사이즈값 스토어 보내기
                        store.state.picksize = tgsize;
                        store.state.pickcolor = tgcolor;
                    }
    
                    $(".opt_del").click(function () {
                        $(".dtfinal_bx").css("display", "none");
                        $(".dttot_bx").css("display", "none");
                    });
                    }); // opt2 옵션리스트 li click
                }); // op2t click
            }); // opt1 li click
        },
        // 디테일페이지 닫기 메서드
        closeDetail() {
            // 상품 디테일박스 & 상품 옵션 박스 & 최종 결제가 박스 닫힘
            $(".dtfinal_bx").css("display", "none");
            $(".dttot_bx").css("display", "none");
            // 색상 선택후 바로 닫기버튼 클릭시 텍스트 초기화
            $(".option_color > span").text("색상 옵션을 선택해 주세요.");

            // 디테일박스 닫기
            this.showDt = false;
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
