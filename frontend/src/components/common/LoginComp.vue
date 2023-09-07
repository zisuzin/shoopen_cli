<script>
// 공통기능함수
import comData from '@/js/tempData/comComp.js';
import SignupComp from './SignupComp.vue';
// 제이쿼리 불러오기
import $ from "jquery";

export default {
    name: 'LoginComp',
    template: comData.loginComp,
    components: {
        SignupComp,
    },
    methods: {
    // 회원가입창 보이기 메서드
    signupFn() {
      // 클릭시 창 열림
      $(".signup_wrap").addClass("show");

      $(".btn_expand").click(function () {
        // 약관조항 버튼 클릭시 조항 보이기
        $(this).toggleClass("on");
        $(this).is(".on") ? $(".termsbx").css("display", "block") : $(".termsbx").css("display", "none");
      });
      $(".termsbx").click(function (e) {
        // 기본기능 막기
        e.preventDefault();
      });
      $(".signup_clbtn").click(function () {
        // 닫기버튼 클릭시 닫힘
        $(".signup_wrap").removeClass("show");
      });

      // 회원가입 컴포넌트 메서드 호출!
      this.$refs.signup.searchForm();
    },
  },
}
</script>