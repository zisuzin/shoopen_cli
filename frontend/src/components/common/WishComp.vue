<script>
// 공통기능함수
import crossMixin from '@/js/common.js';
// 공통 템플릿 데이터
import comData from '@/js/tempData/comComp.js';

export default {
    name: 'WishComp',
    template: comData.wishComp,
    mixins: [crossMixin],
};
</script>
