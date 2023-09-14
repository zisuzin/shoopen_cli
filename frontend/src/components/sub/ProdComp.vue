<!-- new/best gnb 클릭시 전용 템플릿!! -->
<template>
    <div>
        <!-- 메인영역 -->
        <main id="cont">
          <!-- 속박스 -->
          <div class="cont">
            <section class="prod_container">
              <div class="prod_inner">
                <h2>{{ $route.params.id.toUpperCase() }}</h2>
                <div class="prod_items">
                  <div class="prod_tab">
                    <ul>
                      <li v-for="(v, i) in catTit" :key="i" @click.prevent="$store.commit('chgList', v)">
                        <a href="#">{{ v.toUpperCase() }}</a>
                      </li>
                    </ul>
                  </div>
                    <div class="prod_cont">
                        <ul>
                            <template v-for="(v,i) in prdData[$route.params.id]">
                                <template v-for="x in v">
                                    <li :key="x.idx" @click.prevent="getData(x)" v-if="$store.state.setcat === i || $store.state.setcat === 'all' && x.idx>=0 && x.idx<12+$store.state.mnum">
                                        <div class="prodbx">
                                            <div class="prod_img">
                                                <img :src="'/images/goods/'+x.img+'.jpg'" alt="x.name" />
                                            </div>
                                            <div title="찜하기" class="product_like" v-on:click="addWish(x, 1)">
                                                <button type="button" class="fa-solid fa-heart"></button>
                                            </div>
                                            </div>
                                            <div class="prod-detail">
                                            <div class="prod_txt">
                                                <strong class="brand">슈펜</strong>
                                                <p>{{ x.name }}</p>
                                            </div>
                                            <div class="pricebx">
                                                <span class="original-price">
                                                <em>{{ setComma(x.oprice) }}</em>
                                                <span v-if="x.oprice">원</span>
                                                </span>
                                                <br />
                                                <span class="discount-price">
                                                <em>{{ setComma(x.dprice) }}</em>
                                                <span>원</span>
                                                </span>
                                                <span class="percent-price" v-if="x.oprice && x.dprice">
                                                <em>{{ setDiscount(x.oprice, x.dprice) }}</em>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </div>
                    <!-- 여기부터 디테일페이지! -->
                    <DetailComp v-if="showDt" :style="compStyle" @close-detail="closeDetail"/>
                    <!-- new 페이지 더보기 버튼 -->
                    <div class="btnwrap" v-if="$store.state.mbtn && $store.state.setcat === 'all'">
                        <button type="button" class="more_btn" @click="$store.commit('updateList', 12)">View More</button>
                    </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <!-- 하단영역 -->
        <footer id="info">
          <!-- 속박스 -->
          <div class="info">
            <!-- 푸터영역 -->
            <FootComp />
            <p class="f_copyright">COPYRIGHT © WONDERPLACE ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
    </div>
</template>

<script>
// 공통기능함수
import crossMixin from "../../js/common.js";
// 하단컴포넌트
import FootComp from "../common/FootComp.vue";
import DetailComp from "./DetailComp.vue";
// 상품정보데이터
import prdData from "../../js/gdsData/newbestData.js";
// 제이쿼리 불러오기
import $ from "jquery";
// 스토어 불러오기
import store from "../../js/store.js"; 
// 서브페이지 CSS
import "../../scss/sub.scss";

export default {
  name: "ProdComp",
  components: {
    FootComp,
    DetailComp,
  },
  mixins: [crossMixin],
  data() {
    return {
      prdData: prdData,
      showDt: false,
      catTit: ["all", "women", "men", "kids"],
    };
  },
  created() {
    // 파라미터 셋팅용 변수
    store.state.curUrl0 = this.$route.params.type;
    store.state.curUrl1 = this.$route.params.id;
  },
  computed: {
    store() {
      return this.$store;
    },
    // 상세페이지 조건부 렌더링
    compStyle() {
        return {
            visibility: this.showDt ? 'visible' : 'hidden',
            opacity: this.showDt ? 1 : 0,
            transition: this.showDt ? '0.3s ease' : '0s ease', 
        };
    },
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
        // 디테일페이지 닫기
        this.showDt = false;
        // 로컬스토리지에서 데이터 삭제
        localStorage.removeItem("detsrc");
    },
  },
  mounted() {
    $(".prod_tab li").click(function () {
      // 클래스 on 일때 css 변경
      $(this).addClass("on").siblings().removeClass("on");
    });

    // 서브페이지 초기데이터 셋팅
    function initCatnum() {
      // lnb 텍스트 저장 변수
      const ary = $(".catbx > .on");
      const ary2 = $(".prod_tab li > a");
      ary2.each(function (idx, ele) {
        if ($(ele).text() === store.state.curUrl0.toUpperCase()) {
          // 트리거 셋팅
          $(this).parent().trigger("click").addClass("on").siblings().removeClass("on");
        }
      });
      ary.click(function() {
       const btn0 = document.querySelector(".prod_tab li")
       // 트리거 셋팅
       btn0.click();
      })
    } ////////////// initCatnum 함수 ////////////////


    // 최초호출!
    initCatnum();
  },
};
</script>
