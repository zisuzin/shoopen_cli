<!-- 메인페이지 media 섹션 템플릿 -->
<template>
  <li class="swiper-slide">
    <a href="#">
      <!-- 썸네일 출력 영역 -->
      <div class="media_thumb">
        <img v-bind:src="tumbimg" alt="대표썸네일" />
        <span class="mlogo">
          <img src="/images/logo/logo_y.jpg" alt="sns계정명" />
          shoopen_official
        </span>
      </div>
      <div class="media_depth">
        <!-- 상품1 출력 영역 -->
        <div class="prod1bx">
          <div class="left_img">
            <img v-bind:src="dpt1img" alt="상품이미지1" />
          </div>
          <div class="right_txt">
            <p>{{ dpt1name }}</p>
            <em>{{ setComma(dpt1price) }}</em>
          </div>
        </div>
        <!-- 상품2 출력 영역 -->
        <div class="prod2bx">
          <div class="left_img">
            <img v-bind:src="dpt2img" alt="상품이미지2" />
          </div>
          <div class="right_txt">
            <p>{{ dpt2name }}</p>
            <em>{{ setComma(dpt2price) }}</em>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
// 공통기능 함수
import crossMixin from "../../js/common.js";
// 스와이퍼 불러오기
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "MedComp",
  mixins: [crossMixin],
  props: ["matchmedia", "dpt1val", "dpt2val"],
  data: function () {
    return {
      tumbimg: `./images/main/media/thumb/${this.matchmedia.thumbImg}`,
      dpt1img: `./images/main/media/depth1/${this.dpt1val[0]}`,
      dpt1name: this.dpt1val[1],
      dpt1price: this.dpt1val[2],
      dpt2img: `./images/main/media/depth2/${this.dpt2val[0]}`,
      dpt2name: this.dpt2val[1],
      dpt2price: this.dpt2val[2],
    };
  },
  mounted() {
    new Swiper(".mSwiper3", {
      slidesPerView: 4,
      slidesPerGroup: 1,
    });
  },
};
</script>
