<!-- 메인페이지 best 섹션 템플릿 -->
<script>
// 공통기능함수
import crossMixin from "../../js/common.js";
// 공통 템플릿 데이터
import mainData from "../../js/tempData/mainComp.js";
// 제이쿼리 불러오기
import $ from "jquery";
// 더미데이터
import { m_bestData } from "../../js/gdsData/mainData.js";
// 스토어 불러오기
import store from "../../js/store.js";

export default {
  name: "BestComp",
  mixins: [crossMixin],
  template: mainData.bestarea,
  data() {
    return {
      // 외부 더미 데이터
      m_bestData: m_bestData,
      notelnb: ["#1만원대 특가 신발", "#버킷햇", "#썸머 슈즈"],
    };
  },
  methods: {
    moveDet(pm) {
        // 로컬스토리지에 데이터 저장
        localStorage.setItem("detsrc", JSON.stringify(pm.name));
        setTimeout(() => {
            store.state.dispatch("setDet");
        }, 10);
        // // 페이지 이동
        location.href = "product/all/best";
    }
  },
  mounted() {
    // 첫번째 dd에 강제 클릭
    $(".mbtit2 > dd:first").addClass("on").siblings().removeClass("on").trigger("click");
    const index = $(".mbtit2 > dd:first").index();
    this.setNum(index);

    // 클릭한 dd에만 on 넣기
    $(".mbtit2 > dd").click(function() {
      $(this).addClass("on").siblings().removeClass("on");
    });
  },
};
</script>
