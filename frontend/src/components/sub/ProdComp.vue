<!-- new/best gnb 클릭시 전용 템플릿!! -->
<template>
    <!-- 메인영역 -->
    <main id="cont">
      <!-- 속박스 -->
      <div class="cont">
        <section class="prod_container">
          <div class="new_inner">
            <h2>{{ $route.params.id.toUpperCase() }}</h2>
            <div class="new_items">
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
                    <template v-if="$store.state.setcat === i || $store.state.setcat === 'all'">
                        <li v-for="x in v" :key="x.name">
                          <div class="prodbx">
                            <a href="#">
                              <div class="prod_img">
                                <img :src="'/images/goods/'+x.img+'.jpg'" alt="x.name" />
                              </div>
                            </a>
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
</template>

<script>
// 공통기능 함수
import crossMixin from "../../js/common.js";
// 하단컴포넌트
import FootComp from "../common/FootComp.vue";
// 상품정보데이터
import prdData from "../../js/gdsData/newbestData.js";
// 제이쿼리 불러오기
import $ from "jquery";
// 스토어 불러오기
import store from "../../js/store.js"; // eslint-disable-line no-unused-vars
// 서브페이지 CSS
import "../../css/sub.css";

export default {
  name: "ProdComp",
  components: {
    FootComp,
  },
  mixins: [crossMixin],
  data() {
    return {
      prdData: prdData,
      catTit: ["all", "women", "men", "kids"],
    };
  },
  computed: {
    store() {
      return this.$store;
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
      const ary2 = $(".prod_tab li > a");
      const routePath = '/product/all/:id';
      const extractVal = routePath.split('/')[2];

      ary2.each(function (idx, ele) {
        if ($(ele).text() === extractVal.toUpperCase()) {
          // 트리거 셋팅
          $(this).parent().trigger("click").addClass("on").siblings().removeClass("on");
        }
      });
    } ////////////// initCatnum 함수 ////////////////

    // 최초호출!
    initCatnum();
  },
};
</script>
