import store from "./store";

/************* 공통기능 함수 *************/
const crossMixin = {
  methods: {
    // 세자리 콤마찍기 함수
    setComma(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    // 배열 순번 셋업함수
    setNum(pm) {
      return (store.state.setNumber = pm);
    },
    // 정가/할인가 비교해서 할인율 계산 함수
    setDiscount(oprice, dprice) {
      // 정가와 할인가 중 하나라도 빈값이면 빈값 반환
      if (!oprice || !dprice) {
        return "";
      }
      const discount = ((oprice - dprice) / oprice) * 100;
      return Math.floor(discount) + "%";
    },
    // url 읽어와서 카테고리마다 고유넘버 적용시키고 결과값으로 보내기
    dataNum() {
      let result = "";
      let cat = store.state.curUrl0;

      // 분기시키기
      switch (cat) {
        case (cat = "women"):
          result = "0";
          break;
        case (cat = "men"):
          result = "1";
          break;
        case (cat = "kids"):
          result = "2";
          break;
      }
      // 분기한 결과값 뱉어내기!
      return result;
    },
    // 카트 추가 메서드
    // addWish(pm, cnt) {
    //   console.log("담긴 위시 아이템:", pm);
    //   let num = cnt; // 기본수량 - 1
    //   let imgData = pm["wsimg"] || pm["img"];
    //   let nameData = pm["name"];
    //   let priceData = pm["dprice"];

    //   let arr = [imgData, nameData, priceData];
    //   let arr2 = num;
    //   let getItem = localStorage.getItem("ws_item");
    //   // 중복데이터 선별 변수 (true/false)
    //   let isB = getItem.includes(arr[1]);
    //   console.log("중복여부검사:", isB);

    //   if (isB == true) {
    //     // console.log("중복");
    //     alert("이미 선택하신 상품입니다.");
    //     return;
    //   } else if (isB == false) {
    //     // console.log("추가")

    //     // 배열 추가
    //     wishData.push(arr);
    //     opnum.push(arr2);

    //     // 로컬스토리지 업데이트
    //     localStorage.setItem("ws_item", JSON.stringify(wishData));
    //     localStorage.setItem("ws_num", JSON.stringify(opnum));
    //     // state 업데이트
    //     store.state.wish = wishData;
    //     store.state.wishNum = opnum;
    //     store.state.callout = opnum.length;
    //   }

    //   // 값이 들어오면 콜아웃 나타남
    //   $(".callout").css({ display: "inline-block" });
    // },
  },
};

export default crossMixin;