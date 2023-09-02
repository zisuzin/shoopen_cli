<template>
    <ul class="side">
        <!-- 3. 사이드영역 -->
        <li><a href="#" class="ico_mypage" @click="loginFn()"></a></li>
        <li><a href="#" class="ico_cart"></a></li>
        <li class="wishbtn" @click="wishFn()">
            <a href="#" class="ico_wish"></a>
            <div class="callout">{{$store.state.callout}}</div>
        </li>
    </ul>
</template>

<script>
// 제이쿼리 불러오기
import $ from "jquery";

export default {
    name: 'SideComp',
    methods: {
    wishFn() {
      $(".wish_comp").toggleClass("show").siblings().removeClass("show");
    },
    loginFn() {
      $(".user_comp").toggleClass("show").siblings().removeClass("show");
    },
  },
}
</script>

