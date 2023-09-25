<!-- 메인페이지 new 섹션 컴포넌트 -->
<script>
// 공통기능함수
import crossMixin from "../../js/common.js";
// 공통 템플릿 데이터
import mainData from "../../js/tempData/mainComp.js";
// 제이쿼리 불러오기
import $ from "jquery";
// 스와이퍼 불러오기
import { PrdSwiper } from "../../js/swiper.js";
// 더미데이터
import { m_newData } from "../../js/gdsData/mainData.js";

export default {
  name: "NewComp",
  template: mainData.newarea,
  mixins: [crossMixin],
  data() {
    return {
      m_newData: m_newData,
      notelnb2: ["WOMEN", "MEN", "KIDS"],
    };
  },
  methods: {
    moveDet(pm) {
        // 로컬스토리지에 데이터 저장
        localStorage.setItem("detnm", pm.name);
        localStorage.setItem("detimg", pm.img);

        // 페이지 이동
        this.$router.push({ path: "/product/all/new"}).then(() => {
            // 페이지 이동후 store 함수 실행!
            this.$store.dispatch("setDet");
        });
    }
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

    // 스와이퍼 호출
    PrdSwiper();
    // DOM 로드 & 리사이즈시 호출!
    window.addEventListener('load', PrdSwiper);
    window.addEventListener('resize', PrdSwiper);
  },
  // 컴포넌트 소멸 전 실행   
  beforeUnmount() {
    window.removeEventListener('load', PrdSwiper);
    window.removeEventListener('resize', PrdSwiper);
  }, //////////// beforeUnmount ////////////
};
</script>

<style scoped>
    @media screen and (max-width: 900px) {
        .mntit_bx {
            flex-direction: column;
        }
    }
    @media screen and (max-width: 600px) {
        .mntit2 > dd a,
        .morebtn > a {
            font-size: min(1.5rem, 4vw);
        }
    }
</style>
