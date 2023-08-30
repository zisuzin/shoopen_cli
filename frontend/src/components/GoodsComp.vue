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
                                    <a href="#" v-on:click="setCatnum('전체')"
                                        ><span>전체</span></a
                                    >
                                    <a
                                        href="#"
                                        v-for="(v, n) in $store.state.setlnb"
                                        :key="n"
                                        v-on:click="setCatnum(v)"
                                        ><span>{{ v }}</span></a
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- 상품옵션 선택박스 -->
                        <div class="prd-cat-option">
                            <!-- 상품정렬 탭 -->
                            <ul class="option-left">
                                <li
                                    class="filter_option"
                                    v-on:click="sortList('catnum')"
                                >
                                    <a href="#">신상품순</a>
                                </li>
                                <li
                                    class="filter_option"
                                    v-on:click="sortList('dprice')"
                                >
                                    <a href="#">낮은가격순</a>
                                </li>
                                <li
                                    class="filter_option"
                                    v-on:click="sortList('dprice')"
                                >
                                    <a href="#">높은가격순</a>
                                </li>
                                <li
                                    class="filter_option"
                                    v-on:click="sortList('review')"
                                >
                                    <a href="#">상품평순</a>
                                </li>
                            </ul>
                            <div class="option-right">
                                <!-- 상품카운트 박스 -->
                                <div class="prd_count">
                                    <p>
                                        <strong>{{
                                            $store.state.pdlength
                                        }}</strong>
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
                                    <template v-for="v in $store.state.imgpath">
                                        <template
                                            v-if="
                                                $store.state.curUrl2 === i ||
                                                $store.state.curUrl2 === '전체'
                                            "
                                        >
                                            <li
                                                v-for="a in v"
                                                :key="a.name"
                                                @click.prevent="getData(a)"
                                                v-on:mouseover="handleMouseOver"
                                                v-on:mouseleave="
                                                    handleMouseLeave
                                                "
                                            >
                                                <div class="ui-prod-bx">
                                                    <a href="#">
                                                        <div
                                                            class="prod-detail-img"
                                                        >
                                                            <img
                                                                :src="
                                                                    './images/goods/' +
                                                                    $store.state
                                                                        .curUrl0 +
                                                                    '/' +
                                                                    a.img +
                                                                    '.jpg'
                                                                "
                                                                :alt="a.name"
                                                            />
                                                        </div>
                                                    </a>
                                                    <div
                                                        title="찜하기"
                                                        class="product_like"
                                                        v-on:click="
                                                            addWish(a, 1)
                                                        "
                                                    >
                                                        <button
                                                            type="button"
                                                            class="fa-solid fa-heart"
                                                        ></button>
                                                    </div>
                                                </div>
                                                <div class="item-detail">
                                                    <div class="prod_txt">
                                                        <strong class="brand"
                                                            >슈펜</strong
                                                        >
                                                        <p>{{ a.name }}</p>
                                                    </div>
                                                    <span
                                                        class="original-price"
                                                    >
                                                        <em>{{
                                                            setComma(a.oprice)
                                                        }}</em>
                                                        <span v-if="a.oprice"
                                                            >원</span
                                                        >
                                                    </span>
                                                    <br />
                                                    <span
                                                        class="discount-price"
                                                    >
                                                        <em>{{
                                                            setComma(a.dprice)
                                                        }}</em>
                                                        <span>원</span>
                                                    </span>
                                                    <span
                                                        class="percent-price"
                                                        v-if="
                                                            a.oprice && a.dprice
                                                        "
                                                    >
                                                        <em>{{
                                                            setDiscount(
                                                                a.oprice,
                                                                a.dprice,
                                                            )
                                                        }}</em>
                                                    </span>
                                                    <div class="box_grade">
                                                        <div class="star">
                                                            <span
                                                                v-if="a.review"
                                                                >{{
                                                                    '(' +
                                                                    a.review +
                                                                    ')'
                                                                }}</span
                                                            >
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
                                <div class="swiper mySwiper">
                                    <ul class="swiper-wrapper">
                                        <li class="swiper-slide">
                                            <img
                                                :src="
                                                    './images/goods/' +
                                                    $store.state.curUrl0 +
                                                    '/' +
                                                    $store.state.dtimg +
                                                    '.jpg'
                                                "
                                                alt="썸네일 대표이미지"
                                            />
                                        </li>
                                        <li class="swiper-slide">
                                            <img
                                                :src="
                                                    './images/goods/' +
                                                    $store.state.curUrl0 +
                                                    '/' +
                                                    $store.state.curUrl1 +
                                                    '/' +
                                                    $store.state.dtsumimg2 +
                                                    '.jpg'
                                                "
                                                alt="썸네일 상세이미지1"
                                            />
                                        </li>
                                        <li class="swiper-slide">
                                            <img
                                                :src="
                                                    './images/goods/' +
                                                    $store.state.curUrl0 +
                                                    '/' +
                                                    $store.state.curUrl1 +
                                                    '/' +
                                                    $store.state.dtsumimg3 +
                                                    '.jpg'
                                                "
                                                alt="썸네일 상세이미지2"
                                            />
                                        </li>
                                    </ul>
                                    <div class="swiper-button-next swbtn"></div>
                                    <div class="swiper-button-prev swbtn"></div>
                                </div>
                                <!-- 썸네일 리스트 -->
                                <div class="swiper mySwiper2">
                                    <ul class="swiper-wrapper">
                                        <li class="swiper-slide">
                                            <img
                                                :src="
                                                    './images/goods/' +
                                                    $store.state.curUrl0 +
                                                    '/' +
                                                    $store.state.dtimg +
                                                    '.jpg'
                                                "
                                                alt="썸네일 상세이미지1"
                                            />
                                        </li>
                                        <li class="swiper-slide">
                                            <img
                                                :src="
                                                    './images/goods/' +
                                                    $store.state.curUrl0 +
                                                    '/' +
                                                    $store.state.curUrl1 +
                                                    '/' +
                                                    $store.state.dtsumimg2 +
                                                    '.jpg'
                                                "
                                                alt="썸네일 상세이미지2"
                                            />
                                        </li>
                                        <li class="swiper-slide">
                                            <img
                                                :src="
                                                    './images/goods/' +
                                                    $store.state.curUrl0 +
                                                    '/' +
                                                    $store.state.curUrl1 +
                                                    '/' +
                                                    $store.state.dtsumimg3 +
                                                    '.jpg'
                                                "
                                                alt="썸네일 상세이미지3"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 구매 인터페이스 영역 -->
                            <div class="detail_buy">
                                <div class="buyarea">
                                    <dl>
                                        <dt>{{ $store.state.dtname }}</dt>
                                        <dd class="price_wrap">
                                            <div class="price">
                                                <div class="txt-def">
                                                    <em>
                                                        {{
                                                            setComma(
                                                                $store.state
                                                                    .dtoprice,
                                                            )
                                                        }}
                                                        <span
                                                            v-if="
                                                                $store.state
                                                                    .dtoprice
                                                            "
                                                            >원</span
                                                        >
                                                    </em>
                                                </div>
                                                <div class="txt-dsc">
                                                    <em>{{
                                                        setComma(
                                                            $store.state
                                                                .dtdprice,
                                                        )
                                                    }}</em>
                                                    <span>원</span>
                                                    <span class="txt-percent">
                                                        <em>{{
                                                            setDiscount(
                                                                $store.state
                                                                    .dtoprice,
                                                                $store.state
                                                                    .dtdprice,
                                                            )
                                                        }}</em>
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
                                                        <div
                                                            class="option_inner option_color"
                                                            @click="openCat()"
                                                        >
                                                            <span
                                                                >색상 옵션을
                                                                선택해주세요.</span
                                                            >
                                                        </div>
                                                        <div
                                                            class="option_list coloropt"
                                                        >
                                                            <ul>
                                                                <li
                                                                    v-for="(
                                                                        a, b
                                                                    ) in $store
                                                                        .state
                                                                        .dtcolor"
                                                                    :key="b"
                                                                >
                                                                    <span>{{
                                                                        a
                                                                    }}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="size">
                                                    <em>사이즈</em>
                                                    <div class="copt">
                                                        <div
                                                            class="option_inner option_size"
                                                        >
                                                            <span
                                                                >사이즈 옵션을
                                                                선택해
                                                                주세요.</span
                                                            >
                                                        </div>
                                                        <div
                                                            class="option_list sizeopt"
                                                        >
                                                            <ul>
                                                                <li
                                                                    v-for="(
                                                                        a, b
                                                                    ) in $store
                                                                        .state
                                                                        .dtsize"
                                                                    :key="b"
                                                                >
                                                                    <span>{{
                                                                        a
                                                                    }}</span>
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
                                                        {{
                                                            '[택배배송] ' +
                                                            $store.state
                                                                .pickcolor +
                                                            '/' +
                                                            $store.state
                                                                .picksize
                                                        }}
                                                    </div>
                                                    <div class="opt_num">
                                                        <a
                                                            href="#"
                                                            role="button"
                                                            class="minus"
                                                            v-on:click.prevent="
                                                                minusBtn()
                                                            "
                                                            >수량감소</a
                                                        >
                                                        <a
                                                            href="#"
                                                            role="button"
                                                            class="plus"
                                                            v-on:click.prevent="
                                                                plusBtn()
                                                            "
                                                            >수량증가</a
                                                        >
                                                        <label>
                                                            <input
                                                                type="number"
                                                                class="num"
                                                                title="수량"
                                                                value="1"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div class="opt_price">
                                                        <strong>{{
                                                            setComma(
                                                                $store.state
                                                                    .dtdprice,
                                                            )
                                                        }}</strong
                                                        >원
                                                    </div>
                                                    <span class="opt_del">
                                                        <i
                                                            class="fa-solid fa-xmark"
                                                        ></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="dttot_bx">
                                            <span class="tot_txt">총 합계</span>
                                            <span class="tot_price">
                                                <strong>{{
                                                    setComma(
                                                        Number(
                                                            $store.state
                                                                .dtdprice,
                                                        ) * $store.state.result,
                                                    )
                                                }}</strong>
                                                원
                                            </span>
                                        </div>
                                        <div class="dtbtn">
                                            <a href="#">CART</a>
                                            <a href="#">BUY</a>
                                        </div>
                                        <div
                                            class="dtbtn clbtn"
                                            @click.prevent="closeDetail"
                                        >
                                            <a href="#">
                                                CLOSE
                                                <i
                                                    class="fa-solid fa-xmark"
                                                ></i>
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
</template>

<script>
// 더미데이터들
import kidsData from '../js/gdsData/kidsData';
import menData from '../js/gdsData/menData';
import womenData from '../js/gdsData/womenData';
import store from '@/js/store';
import $ from 'jquery';

export default {
    name: 'GoodsComp',
    data() {
        return {
            // 외부 더미 데이터들
            tgData: [womenData, menData, kidsData],
            showDt: false,
        };
    },
    watch: {
        '$store.state.curUrl1': 'initSetSubSrc',
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

            console.log($('.swiper-slide'));

            // 디테일박스 열기
            this.showDt = true;
        },
        // 서브페이지 최상위 경로 설정해주는 함수
        initSetSubSrc() {
            // 중분류 데이터값에 따라 lnb 데이터 변경!
            let catval = this.$route.query;
            console.log(catval);
            // 각 카테고리별 lnb 대분류 경로 설정
            switch (catval) {
                case 'shoes':
                    store.state.setlnb =
                        store.state.gnb[store.state.curUrl0].dpt1;
                    break;
                case 'bag':
                    store.state.setlnb =
                        store.state.gnb[store.state.curUrl0].dpt2;
                    break;
                case 'ac':
                    store.state.setlnb =
                        store.state.gnb[store.state.curUrl0].dpt3;
                    break;
            }
        },
    },
};
</script>
