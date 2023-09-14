// 서브페이지 뷰엑스 스토어 셋팅- store.js
import { createStore } from 'vuex';
// 더미 데이터들
import womenData from './gdsData/womenData.js';
import menData from './gdsData/menData.js';
import kidsData from './gdsData/kidsData.js';
// 제이쿼리 불러오기
import $ from "jquery";

const store = createStore({
    // (1) 데이터 셋팅구역:
    state: {
        // gnb 데이터셋업
        gnb: {
            women: {
                items: womenData,
                subtit: ['신상', '베스트', '여성신발', '여성가방', '여성잡화'],
                dpt1: ['플랫슈즈', '샌들'],
                dpt2: ['백팩', '미니백'],
                dpt3: ['양말', '모자'],
                // 상품 카테고리 박스
                shoes: {
                    플랫슈즈: {
                        size: ['225', '230', '235', '240', '245', '250', '255'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#ebdcc5^BEIGE',
                            '#f9ef69^YELLOW',
                            '#603417^BROWN',
                            '#a9a9a9^GRAY',
                            '#8ca9a0^MINT',
                        ],
                    },
                    샌들: {
                        size: ['225', '230', '235', '240', '245', '250'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#ebdcc5^BEIGE',
                            '#603417^BROWN',
                            '#000^BLACK',
                            '#d46e25^ORANGE',
                        ],
                    },
                },
                bag: {
                    백팩: {
                        size: ['FREE'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#e3c2c7^PINK',
                            '#7d847a^KHAKI',
                            '#000^BLACK',
                        ],
                    },
                    미니백: {
                        size: ['S', 'M'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#f9ef69^YELLOW',
                            '#e3c2c7^PINK',
                            '#e4cce9^PURPLE',
                            '#264d4e^GREEN',
                            '#7d847a^KHAKI',
                            '#603417^BROWN',
                            '#000^BLACK',
                        ],
                    },
                },
                ac: {
                    양말: {
                        size: ['S', 'M', 'L'],
                        color: [
                            '#fff^WHITE',
                            '#ebdcc5^BEIGE',
                            '#a9a9a9^GRAY',
                            '#000^BLACK',
                        ],
                    },
                    모자: {
                        size: ['FREE'],
                        color: [
                            '#fff^WHITE',
                            '#ebdcc5^BEIGE',
                            '#f9ef69^YELLOW',
                        ],
                    },
                },
            },
            men: {
                items: menData,
                subtit: ['신상', '베스트', '남성신발', '남성가방', '남성잡화'],
                dpt1: ['스니커즈', '슬리퍼'],
                dpt2: ['맨즈백', '크로스백'],
                dpt3: ['양말', '모자'],
                // 상품 카테고리 박스
                shoes: {
                    스니커즈: {
                        size: [
                            '230',
                            '235',
                            '240',
                            '245',
                            '250',
                            '255',
                            '260',
                            '265',
                            '270',
                            '275',
                            '280',
                        ],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#ebdcc5^BEIGE',
                            '#e3c2c7^PINK',
                            '#d0283a^RED',
                            '#264d4e^GREEN',
                            '#487bff^BLUE',
                            '#a9a9a9^GRAY',
                            '#000^BLACK',
                        ],
                    },
                    슬리퍼: {
                        size: ['250', '260', '270', '280'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#ebdcc5^BEIGE',
                            '#f9ef69^YELLOW',
                            '#7dbbff^AQUA',
                            '#000^BLACK',
                        ],
                    },
                },
                bag: {
                    맨즈백: {
                        size: ['FREE'],
                        color: ['#feffef^IVORY', '#a9a9a9^GRAY', '#000^BLACK'],
                    },
                    크로스백: {
                        size: ['FREE'],
                        color: [
                            '#ebdcc5^BEIGE',
                            '#f9ef69^YELLOW',
                            '#d0283a^RED',
                            '#a9a9a9^GRAY',
                            '#000^BLACK',
                        ],
                    },
                },
                ac: {
                    양말: {
                        size: ['S', 'M'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#ebdcc5^BEIGE',
                            '#487bff^BLUE',
                            '#a9a9a9^GRAY',
                            '#000^BLACK',
                        ],
                    },
                    모자: {
                        size: ['FREE'],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#ebdcc5^BEIGE',
                            '#d46e25^ORANGE',
                            '#487bff^BLUE',
                            '#a9a9a9^GRAY',
                        ],
                    },
                },
            },
            kids: {
                items: kidsData,
                subtit: ['신상', '베스트', '아동신발', '아동가방', '아동잡화'],
                dpt1: ['구두', '샌들'],
                dpt2: ['슬리퍼가방', '패션가방'],
                dpt3: ['양말', '모자'],
                // 상품 카테고리 박스
                shoes: {
                    구두: {
                        size: [
                            '130',
                            '140',
                            '150',
                            '160',
                            '170',
                            '180',
                            '190',
                            '200',
                            '210',
                            '220',
                            '230',
                        ],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#f9ef69^YELLOW',
                            '#e3c2c7^PINK',
                            '#d0283a^RED',
                            '#000^BLACK',
                        ],
                    },
                    샌들: {
                        size: [
                            '130',
                            '140',
                            '150',
                            '160',
                            '170',
                            '180',
                            '190',
                            '200',
                            '210',
                            '220',
                        ],
                        color: [
                            '#fff^WHITE',
                            '#feffef^IVORY',
                            '#f9ef69^YELLOW',
                            '#603417^BROWN',
                            '#e3c2c7^PINK',
                            '#d0283a^RED',
                            '#7dbbff^AQUA',
                            '#487bff^BLUE',
                            '#000^BLACK',
                        ],
                    },
                },
                bag: {
                    슬리퍼가방: {
                        size: ['M'],
                        color: ['#e3c2c7^PINK'],
                    },
                    패션가방: {
                        size: ['S', 'M'],
                        color: [
                            '#fff^WHITE',
                            '#e3c2c7^PINK',
                            '#e4cce9^PURPLE',
                            '#000^BLACK',
                        ],
                    },
                },
                ac: {
                    양말: {
                        size: ['S', 'M', 'L'],
                        color: [
                            '#fff^WHITE',
                            '#ebdcc5^BEIGE',
                            '#e3c2c7^PINK',
                            '#f9ef69^YELLOW',
                            '#e4cce9^PURPLE',
                            '#000^BLACK',
                        ],
                    },
                    모자: {
                        size: ['FREE'],
                        color: [
                            '#fff^WHITE',
                            '#ebdcc5^BEIGE',
                            '#e3c2c7^PINK',
                            '#f9ef69^YELLOW',
                            '#264d4e^GREEN',
                            '#000^BLACK',
                        ],
                    },
                },
            },
        }, ////// gnb //////

        //////////////////////////////

        // 대분류/중분류 변수
        setsubtit1: '',
        setsubtit2: '',
        setsubtit3: '',
        setsubtit4: '',
        setsubtit5: '',
        setdpt1: '',
        setdpt2: '',
        setdpt3: '',

        // 현재 url 변수
        curUrl0: '',
        curUrl1: '',
        curUrl2: '',

        // 서브페이지 출력 변수
        imgpath: {},
        setcat: '',

        // 더보기버튼 상태변수
        mbtn: true,
        // 더보기배수 변수
        mnum: 0,

        // lnb 사용 변수
        setlnb: '',
        catnum: '',

        // 카테고리 옵션 변수
        pdlength: '',

        // 상세페이지 기본
        dtname: '',
        dtimg: '',
        dtoprice: '',
        dtdprice: '',
        dtcolor: '',
        dtsize: '',
        dtreview: '',
        pickcolor: '',
        picksize: '',
        dtsumimg2: '',
        dtsumimg3: '',

        // 디테일페이지 계산에 쓰는 수량 state
        result: 1,

        // wish state
        wish: [],
        wishNum: [], // 셋팅값

        // useState
        callout: 0,
        // 전체 배열 변수
        combineArr: '', // 사이즈
        combineArr2: '', // 색상

        // 메인페이지 배열데이터 접근용 변수
        setNumber: '',

        // 회원가입폼 유효성검사용 변수
        setpass: true,
        // 유효성검사 결과 저장용 변수
        allPass: [],
    }, ////// state 구역 /////

    mutations: {
        // new/best 상품 출력 함수
        chgList(st, pm) {
            store.state.setcat = pm;
        },
        // MORE 버튼 클릭시 이미지 증가 함수
        updateList(dt, pm) {
            dt.mnum += pm;
            if (dt.mnum >= 30)
                dt.mbtn = false;
        },
    }, ////// mutastions 구역 /////
    actions: {
        setDet() {
            // 메인페이지 상품 클릭시 디테일페이지 트리거로 발생
            let getItem = localStorage.getItem("detnm");
            let getItem2 = localStorage.getItem("detimg");
            console.log(Boolean(getItem));
            
            // 상품 카테고리탭 트리거용 변수
            const tglnb = $(".prod_tab li");

            // new 페이지로 랜딩된 경우
            // women, men, kids 각 타겟 관련 페이지로 이동!
            if(location.href.includes("/all/new")) {
                if(getItem2.includes("kids")) {
                    $(tglnb).eq(3).trigger("click");
                }
                else if (getItem2.includes("women")) {
                    $(tglnb).eq(1).trigger("click");
                }
                else if (getItem2.includes("men")) {
                    $(tglnb).eq(2).trigger("click");
                }
            } ////////// if //////////

            function promise() {
                return new Promise((success, fail) => {
                    // 조건 불충족
                    if (Boolean(getItem) == false) {
                        fail();
                    }

                    // 조건 충족
                    setTimeout(() => {
                        success(); // 성공시 await로 전달
                    }, 500);
                });
            }
            async function setDetail() {
                try {
                    await promise(Boolean(getItem) == true); // 조건 충족시 아래 실행
                    console.log("await 디테일페이지로");

                    let txt = getItem;
                    let tgbox = $('.prod_txt p:contains(' + txt + ')');

                    console.log(tgbox);
                    
                    // tgbox 길이가 0이면 예외 처리
                    if(tgbox.length == 0) {
                        throw new Error("디테일페이지 아님");
                    }

                    // 트리거 발생
                    $(tgbox).trigger("click");
                }
                catch(error) {
                    console.log(error.message);
                }
            }
            // 최초호출
            setDetail();
        }
    }
}); ///////////// 뷰엑스 인스턴스 /////////////

export default store;
