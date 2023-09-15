// 스토어 불러오기
import store from './store';
// 제이쿼리 불러오기
import $ from 'jquery';

/************* 공통기능 함수 *************/
const crossMixin = {
    data() {
        return {
            // 위시리스트 배열 데이터
            wishData: [],
            opnum: [],
        }
    },
    methods: {
        // 세자리 콤마찍기 함수
        setComma(val) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        // 배열 순번 셋업함수
        setNum(pm) {
            return (store.state.setNumber = pm);
        },
        // 정가/할인가 비교해서 할인율 계산 함수
        setDiscount(oprice, dprice) {
            // 정가와 할인가 중 하나라도 빈값이면 빈값 반환
            if (!oprice || !dprice) {
                return '';
            }
            const discount = ((oprice - dprice) / oprice) * 100;
            return Math.floor(discount) + '%';
        },
        // 카트 추가 메서드
        addWish(pm, cnt) {
            console.log('담긴 위시 아이템:', pm);
            // 로컬스에 담을 데이터
            let imgData = pm['img'];
            let nameData = pm['name'];
            let priceData = pm['dprice'];

            let arr = [imgData, nameData, priceData];
            let arr2 = cnt; // 기본수량 - 1
            let getItem = localStorage.getItem('ws_item');
            // 중복데이터 선별 변수 (true/false)
            let isB = getItem.includes(arr[1]);
            console.log('중복여부검사:', isB);

            if (isB == true) {
                console.log('중복');
                alert('이미 선택하신 상품입니다.');
                return;
            } else if (isB == false) {
                console.log('추가');

                // 배열 추가
                this.wishData.push(arr);
                this.opnum.push(arr2);

                // 로컬스토리지 업데이트
                localStorage.setItem('ws_item', JSON.stringify(this.wishData));
                localStorage.setItem('ws_num', JSON.stringify(this.opnum));
                // state 업데이트
                store.state.wish = this.wishData;
                store.state.wishNum = this.opnum;
                store.state.callout = this.opnum.length;
            }

            // 값이 들어오면 콜아웃 나타남
            $('.callout').css({ display: 'inline-block' });
        },
    },
};

export default crossMixin;