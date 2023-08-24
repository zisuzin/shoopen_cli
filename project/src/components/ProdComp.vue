<template>
  <div class="new_inner">
    <h2>{{ $store.state.curUrl1.toUpperCase() }}</h2>
    <div class="new_items">
      <div class="prod_tab">
        <ul>
          <li v-for="(v, i) in catTit" :key="i" @click="$store.commit('chgList', v)">
            <a href="#">{{ v.toUpperCase() }}</a>
          </li>
        </ul>
      </div>
      <div class="prod_cont">
        <ul>
          <template v-for="(v, i) in prdData[$store.state.curUrl1]">
            <template v-if="$store.state.setcat === i || $store.state.setcat === 'all'">
                {{ store.state.setcat }}
                <li v-for="prod in v" :key="prod.name">
                  <div class="prodbx">
                    <a href="#">
                      <div class="prod_img">
                        <img :src="'./images/goods/' + prod.img + '.jpg'" alt="prod.name" />
                      </div>
                    </a>
                    <div title="찜하기" class="product_like" v-on:click="addWish(x, 1)">
                      <button type="button" class="fa-solid fa-heart"></button>
                    </div>
                  </div>
                  <div class="prod-detail">
                    <div class="prod_txt">
                      <strong class="brand">슈펜</strong>
                      <p>{{ prod.name }}</p>
                    </div>
                    <div class="pricebx">
                      <span class="original-price">
                        <em>{{ setComma(prod.oprice) }}</em>
                        <span v-if="prod.oprice">원</span>
                      </span>
                      <br />
                      <span class="discount-price">
                        <em>{{ setComma(prod.dprice) }}</em>
                        <span>원</span>
                      </span>
                      <span class="percent-price" v-if="prod.oprice && prod.dprice">
                        <em>{{ setDiscount(prod.oprice, x.dprice) }}</em>
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
</template>

<script>
// 공통기능 함수
import crossMixin from "../js/common.js";
import prdData from "../js/gdsData/newbestData.js";
import $ from "jquery";

export default {
  name: "ProdComp",
  mixins: [crossMixin],
  data() {
    return {
      prdData: prdData,
      catTit: ["all", "women", "men", "kids"],
    };
  },
  mounted() {
    $(".prod_tab li").click(function () {
      // 클래스 on 일때 css 변경
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
};
</script>


