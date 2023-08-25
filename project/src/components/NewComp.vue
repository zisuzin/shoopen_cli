<template>
  <section class="main_new">
    <div class="mntit_bx">
      <dl class="mbtit1">
        <dt class="main_tit">New Arrival</dt>
        <dd class="morebtn">
          <a href="#">전체보기</a>
        </dd>
      </dl>
      <dl class="mntit2">
        <dd v-for="(n, i) in notelnb2" :key="i">
          <a href="#" @click.prevent="setNum(i)">{{ n }}</a>
        </dd>
      </dl>
    </div>
    <div class="mnList">
      <ul>
        <li class="newItem" v-for="(a, b) in m_newData['newItem' + $store.state.setNumber]" :key="b">
          <!-- 이미지 -->
          <a href="#">
            <div class="new-img">
              <img v-bind:src="a.img" alt="a.name" />
            </div>
            <!-- 설명 -->
            <div class="new-txt">
              <div class="ntxt1">
                <strong class="brand">슈펜</strong>
                <p>{{ a.name }}</p>
              </div>
              <div class="ntxt2">
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
// 공통기능 함수
import crossMixin from "../js/common.js";
// 제이쿼리 불러오기
import $ from "jquery";
// 상품정보데이터
import { m_newData } from "../js/gdsData/mainData.js";

export default {
  name: "NewComp",
  mixins: [crossMixin],
  data() {
    return {
      // 외부 더미데이터
      m_newData: m_newData,
      notelnb2: ["WOMEN", "MEN", "KIDS"],
    };
  },
  mounted() {
    // 첫번째 dd에 강제 클릭
    $(".mntit2 > dd:first").addClass("on").siblings().removeClass("on").trigger("click");
    // 첫번째 dd 클릭시 데이터만 우선 보이기
    const index = $(".mntit2 > dd:first").index();
    this.setNum(index);
    // 클릭한 dd에만 on 넣기
    $(".mntit2 > dd").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
};
</script>
