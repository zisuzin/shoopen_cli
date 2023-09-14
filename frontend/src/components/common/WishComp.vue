<script>
// 공통기능함수
import crossMixin from '@/js/common.js';
// 공통 템플릿 데이터
import comData from '@/js/tempData/comComp.js';
// 제이쿼리 불러오기
import $ from 'jquery';
// 스토어 불러오기
import store from '@/js/store.js';

/************* 로컬스토리지 위시리스트 셋팅 *************/
// 위시리스트 배열 데이터
let wishData = [];
let opnum = [];

// 위시리스트 배열 새로고침 초기화 방지
const saveWish = localStorage.getItem('ws_item');
const saveNum = localStorage.getItem('ws_num');

if (saveWish) {
    // 카트에 상품이 있을 경우
    const parseWish = JSON.parse(saveWish);
    const parseNum = JSON.parse(saveNum);

    store.state.wish = parseWish;
    // console.log("로컬스 저장데이터",store.state.wish)
    wishData = parseWish;

    store.state.wishNum = parseNum;
    opnum = parseNum;
} else {
    // 없을 경우 최초 초기 셋팅
    localStorage.setItem('ws_item', JSON.stringify(wishData));
    localStorage.setItem('ws_num', JSON.stringify(opnum));
}
//////////////////////////////////////////////////

export default {
    name: 'WishComp',
    template: comData.wishComp,
    mixins: [crossMixin],
    methods: {
        delWish(tgNum) {
            console.log('삭제!!');

            // 로컬스 업데이트
            wishData.splice(tgNum, 1);
            opnum.splice(tgNum, 1);

            localStorage.setItem('ws_item', JSON.stringify(wishData));
            localStorage.setItem('ws_num', JSON.stringify(opnum));

            // state 업데이트
            store.state.wish = wishData;
            store.state.opnum = opnum;
            store.state.callout = opnum.length;

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
};
</script>
