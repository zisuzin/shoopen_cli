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
              <CategoryComp/>
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
  </div>
</template>

<script>
import CategoryComp from '@/components/CategoryComp.vue';
import '../src/css/common.css';

export default {
  name: 'App',
  components: {
    CategoryComp
  }
}
</script>
