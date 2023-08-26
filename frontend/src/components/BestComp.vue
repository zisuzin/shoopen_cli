<template>
  <section class="main_best">
    <div class="mbtit_bx">
      <dl class="mbtit1">
        <dt class="main_tit">BEST PICK</dt>
        <dd class="morebtn">
          <a href="#">전체보기</a>
        </dd>
      </dl>
      <dl class="mbtit2">
        <dd v-for="(v, i) in notelnb" :key="i">
          <a href="#" @click.prevent="setNum(i)">{{ v }}</a>
        </dd>
      </dl>
    </div>
    <div class="mbList">
      <ul>
        <li class="bestItem" v-for="(a, b) in m_bestData['bestItem' + $store.state.setNumber]" :key="b">
          <!-- 이미지 -->
          <a href="#">
            <div class="best-img">
              <img v-bind:src="a.img" alt="a.name" />
              <span class="ranking_flag">{{ b + 1 }}</span>
            </div>
            <!-- 설명 -->
            <div class="best-txt">
              <div class="btxt1">
                <strong class="brand">슈펜</strong>
                <p>{{ a.name }}</p>
              </div>
              <div class="btxt2">
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
                  <em>{{ (((a.oprice - a.dprice) / a.oprice) * 100).toFixed(0) }}%</em>
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// 공통기능함수
import crossMixin from "../js/common.js";
// 제이쿼리 불러오기
import $ from "jquery";
import { m_bestData } from "../js/gdsData/mainData.js";

export default {
  name: "BestComp",
  mixins: [crossMixin],
  data() {
    return {
      // 외부 더미 데이터
      m_bestData: m_bestData,
      notelnb: ["#1만원대 특가 신발", "#버킷햇", "#썸머 슈즈"],
    };
  },
  mounted() {
    // 첫번째 dd에 강제 클릭
    $(".mbtit2 > dd:first").addClass("on").siblings().removeClass("on").trigger("click");
    // 첫번째 dd 클릭시 데이터만 우선 보이기
    const index = $(".mbtit2 > dd:first").index();
    this.setNum(index);
    // 클릭한 dd에만 on 넣기
    $(".mbtit2 > dd").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
};
</script>
