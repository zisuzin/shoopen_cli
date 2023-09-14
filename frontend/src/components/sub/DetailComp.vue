<template>
    <div class="dt-comp">
        <div class="detailbx">
            <div class="dtsec1">
                <!-- 이미지 배너 박스 -->
                <div class="detail_img">
                    <!-- 슬라이드 이미지 -->
                    <swiper class="swiper mySwiper1">
                        <swiper-slide>
                            <img :src="'/images/goods/' + $store.state.dtimg + '.jpg'" alt="썸네일 대표이미지"/>
                        </swiper-slide>
                        <swiper-slide>
                            <img :src="'/images/goods/' + $store.state.dtsumimg2 + '.jpg'" alt="썸네일 상세이미지1"/>
                        </swiper-slide>
                        <swiper-slide>
                            <img :src="'/images/goods/' + $store.state.dtsumimg3 + '.jpg'" alt="썸네일 상세이미지2"/>
                        </swiper-slide>
                        <div class="swiper-button-next toRbtn"></div>
                        <div class="swiper-button-prev toLbtn"></div>
                    </swiper>
                    <!-- 썸네일 리스트 -->
                    <swiper class="swiper mySwiper2">
                        <swiper-slide>
                            <img :src="'/images/goods/' + $store.state.dtimg + '.jpg'" alt="썸네일 상세이미지1"/>
                        </swiper-slide>
                        <swiper-slide>
                            <img :src="'/images/goods/' + $store.state.dtsumimg2 + '.jpg'" alt="썸네일 상세이미지2"/>
                        </swiper-slide>
                        <swiper-slide>
                            <img :src="'/images/goods/' + $store.state.dtsumimg3 + '.jpg'" alt="썸네일 상세이미지3"/>
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
                                    <span v-if="$store.state.dtreview">
                                        {{ '(' + $store.state.dtreview + ')'}}
                                    </span>
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
                                            <a href="#" role="button" class="minus" v-on:click="minusBtn()" >수량감소</a>
                                            <a href="#" role="button" class="plus" v-on:click="plusBtn()" >수량증가</a>
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
</template>

<script>
// 스와이퍼 불러오기
import swiperFn from "../../js/swiper.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
// 스토어 불러오기
import store from '@/js/store.js';
// 제이쿼리 불러오기
import $ from 'jquery';
// 공통기능함수
import crossMixin from '@/js/common.js';
// 디테일페이지 CSS
import "../../scss/detail.scss";

export default {
    name: 'DetailComp',
    mixins: [crossMixin],
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            setData: this.detData,
        }
    },
    methods: {
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
        // 디테일페이지 닫기 메서드
        closeDetail() {
            // 상품 디테일박스 & 상품 옵션 박스 & 최종 결제가 박스 닫힘
            $(".dtfinal_bx").css("display", "none");
            $(".dttot_bx").css("display", "none");
            // 색상 선택후 바로 닫기버튼 클릭시 텍스트 초기화
            $(".option_color > span").text("색상 옵션을 선택해 주세요.");

            // 디테일박스 닫기
            this.$emit('close-detail');
        },
    },
    mounted() {
        swiperFn();
    }
};
</script>
