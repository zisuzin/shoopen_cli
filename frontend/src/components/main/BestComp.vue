<!-- 메인페이지 best 섹션 템플릿 -->
<script>
// 공통기능함수
import crossMixin from "../../js/common.js";
// 공통 템플릿 데이터
import mainData from "../../js/tempData/mainComp.js";
// 제이쿼리 불러오기
import $ from "jquery";
import 'jquery-ui-dist/jquery-ui';
// 스와이퍼 불러오기
import { PrdSwiper } from "../../js/swiper.js";
// 더미데이터
import { m_bestData } from "../../js/gdsData/mainData.js";

export default {
  name: "BestComp",
  mixins: [crossMixin],
  template: mainData.bestarea,
  data() {
    return {
      // 외부 더미 데이터
      m_bestData: m_bestData,
      notelnb: ["#1만원대 특가 신발", "#보부상 가방", "#썸머 슈즈"],
    };
  },
  methods: {
    moveDet(pm) {
        // 로컬스토리지에 데이터 저장
        localStorage.setItem("detnm", pm.name);

        // 페이지 이동
        this.$router.push({ path: "/product/all/best"}).then(() => {
            // 페이지 이동후 store 함수 실행!
            this.$store.dispatch("setDet");
        });
    },
  }, //////////// methods ////////////
  mounted() {
    // 첫번째 dd에 강제 클릭
    $(".mbtit2 > dd:first").addClass("on").siblings().removeClass("on").trigger("click");
    const index = $(".mbtit2 > dd:first").index();
    this.setNum(index);

    // 클릭한 dd에만 on 넣기
    $(".mbtit2 > dd").click(function() {
      $(this).addClass("on").siblings().removeClass("on");
    });

    // 스와이퍼 호출
    this.$nextTick(() => {
        PrdSwiper();
    });
    
    // DOM 로드 & 리사이즈시 호출!
    window.addEventListener('load', PrdSwiper);
    window.addEventListener('resize', PrdSwiper);
  }, //////////// mounted ////////////

  // 컴포넌트 소멸 전 실행   
  beforeUnmount() {
    window.removeEventListener('load', PrdSwiper);
    window.removeEventListener('resize', PrdSwiper);
  }, //////////// beforeUnmount ////////////
};
</script>

<style scoped>
    @media screen and (max-width: 900px) {
        .mbtit_bx {
            flex-direction: column;
        }
    }
    @media screen and (max-width: 600px) {
        .mbtit2 > dd a,
        .morebtn > a {
            font-size: min(1.5rem, 4vw);
        }
        .mbList_bx {
            overflow: visible !important;
        }
    }
</style>
