<script>
// 공통기능함수
import crossMixin from '@/js/common.js';
// 공통 템플릿 데이터
import comData from '@/js/tempData/comComp.js';
// 제이쿼리 불러오기
import $ from 'jquery';
// 스토어 불러오기
import store from '@/js/store.js';

export default {
    name: 'WishComp',
    template: comData.wishComp,
    mixins: [crossMixin],
    methods: {
        delWish(tgNum) {
            console.log('삭제!!');

            // 로컬스 업데이트
            this.wishData.splice(tgNum, 1);
            this.opnum.splice(tgNum, 1);

            localStorage.setItem('ws_item', JSON.stringify(this.wishData));
            localStorage.setItem('ws_num', JSON.stringify(this.opnum));

            // state 업데이트
            store.state.wish = this.wishData;
            store.state.opnum = this.opnum;
            store.state.callout = this.opnum.length;

            if (store.state.callout === 0)
                $('.callout').css({ display: 'none' });
        },
        wishClose() {
            $('.wish_comp').removeClass('show');
        },
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
    mounted() {
        // 좋아요 버튼 클릭시 버튼 디자인 변경!
        $('.product_like').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('on');
        });
    },
};
</script>