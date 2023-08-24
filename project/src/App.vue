<template>
  <div id="app">
    <!-- 상단영역 -->
    <header id="top">
      <!-- 속박스 -->
      <div class="top fxbx">
        <!-- GNB -->
        <nav>
          <div class="gnb">
            <!-- 1. 로고영역 -->
            <div class="logo">
              <a href="index.html">
                <img src="../public/images/logo/logo.png" alt="메인로고" />
              </a>
            </div>
            <!-- 2. 카테고리영역 -->
            <CategoryComp />
          </div>
          <!-- 3. 사이드 영역-->
          <!-- <side-comp></side-comp> -->
        </nav>
        <!-- 3-1. 로그인/회원가입 컴포넌트 -->
        <!-- <user-comp></user-comp> -->
        <!-- 3-2. 위시리스트 컴포넌트 -->
        <!-- <wish-comp></wish-comp> -->
      </div>
    </header>
    <!-- 메인영역 -->
    <main id="cont">
      <!-- 속박스 -->
      <div class="cont">
        <!-- new/best 상품리스트 -->
        <section class="prod_container">
          <ProdComp />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import $ from "jquery";
import store from "./js/store";
import CategoryComp from "@/components/CategoryComp.vue";
import ProdComp from "@/components/ProdComp.vue";
import "../src/css/common.css";
import "../src/css/sub.css";

export default {
  name: "App",
  components: {
    CategoryComp,
    ProdComp,
  },
  created() {
    store.commit("getLink");
  },
  mounted() {
    // gnb 클릭시 li에 클래스 on
    $(".catbx > .tgGnb").click(function (e) {
      // 기본기능막기
      e.preventDefault();
      $(this).addClass("on").siblings().removeClass("on");
      $(".top").addClass("on");
    }); ///////// click ////////////

    // 마우스아웃시 전체 클래스 빼기
    $("nav").mouseleave(function () {
      $(".top").removeClass("on");
      $(".catbx > .tgGnb").removeClass("on");
    }); ///////// mouseleave //////////
  },
};
</script>
