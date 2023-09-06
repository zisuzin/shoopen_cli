<!-- 메인페이지 new 섹션 컴포넌트 -->
<script>
// 공통기능함수
import crossMixin from "../../js/common.js";
// 공통 템플릿 데이터
import mainData from "../../js/tempData/mainComp.js";
// 제이쿼리 불러오기
import $ from "jquery";
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
