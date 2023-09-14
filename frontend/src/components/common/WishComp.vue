<script>
// 공통기능함수
import crossMixin from '@/js/common.js';
// 공통 템플릿 데이터
import comData from '@/js/tempData/comComp.js';
// 제이쿼리 불러오기
import $ from 'jquery';

export default {
    name: 'WishComp',
    template: comData.wishComp,
    mixins: [crossMixin],
    methods: {
        // 더하기 함수
        minusBtn() {
            let tg = event.currentTarget;
            let num = $(tg).siblings().eq(1).find('input').val();

            num--;

            // -값 방지
            if (num == 0) return;

            // 수량 업데이트
            $(tg).siblings().eq(1).find('input').val(num);
        },
        // 빼기 함수
        plusBtn() {
            let tg = event.currentTarget;
            let num = $(tg).siblings().eq(1).find('input').val();

            num++;

            // 수량 업데이트
            $(tg).siblings().eq(1).find('input').val(num);
        },
    },
};
</script>
