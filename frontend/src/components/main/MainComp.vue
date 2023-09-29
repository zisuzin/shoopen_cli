<!-- 메인페이지 템플릿 -->
<template>
    <div>
        <main id="cont">
            <!-- 속박스 -->
            <div class="cont">
                <!-- 1. 메인배너 섹션 -->
                <section id="main_banner">
                    <div class="mSwiper mySwiper">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_1.jpg" alt="배너이미지1"/>
                            </li>
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_2.jpg" alt="배너이미지2"/>
                            </li>
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_3.jpg" alt="배너이미지3"/>
                            </li>
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_4.jpg" alt="배너이미지4"/>
                            </li>
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_5.jpg" alt="배너이미지5"/>
                            </li>
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_6.jpg" alt="배너이미지6"/>
                            </li>
                            <li class="swiper-slide">
                                <img src="/images/main/front/pc_7.jpg" alt="배너이미지7"/>
                            </li>
                        </ul>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <button type="button" class="swiper-btn-toggle"></button>
                        <div class="pagination_container">
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
                <!-- 2. 베스트섹션(컴포넌트) -->
                <BestComp />
                <!-- 3. 기획전섹션 -->
                <section class="main_special">
                    <div class="mstit">
                        <h3 class="main_tit">Magazine</h3>
                    </div>
                    <div class="msWrap_box">
                        <ul class="msWrap_inner">
                            <li class="msList">
                                <figure>
                                    <div class="special-img">
                                        <img src="/images/main/special/ban1.jpg" alt="트렌드 샌들"/>
                                    </div>
                                </figure>
                                <figcaption>
                                    <h4 class="special-tit">TREND SANDAL</h4>
                                    <p class="special-desc">
                                        더운 여름엔 시원한 아이템
                                    </p>
                                </figcaption>
                            </li>
                            <li class="msList">
                                <figure>
                                    <div class="special-img">
                                        <img src="/images/main/special/ban2.jpg" alt="피크닉"/>
                                    </div>
                                </figure>
                                <figcaption>
                                    <h4 class="special-tit">SUMMER PICNIC</h4>
                                    <p class="special-desc">
                                        청량함 가득한 싱그러운 일상
                                    </p>
                                </figcaption>
                            </li>
                            <li class="msList">
                                <figure>
                                    <div class="special-img">
                                        <img src="/images/main/special/ban3.jpg" alt="장마"/>
                                    </div>
                                </figure>
                                <figcaption>
                                    <h4 class="special-tit">IT'S RAINY DAY</h4>
                                    <p class="special-desc">
                                        올 여름 가장 완벽한 장마 준비
                                    </p>
                                </figcaption>
                            </li>
                            <li class="msList">
                                <figure>
                                    <div class="special-img">
                                        <img
                                            src="/images/main/special/ban4.jpg"
                                            alt="OOTD"
                                        />
                                    </div>
                                </figure>
                                <figcaption>
                                    <h4 class="special-tit">SUPPORTERS 아임슈페너</h4>
                                    <p class="special-desc">아임슈페너들의 OOTD</p>
                                </figcaption>
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- 4. 미디어섹션(컴포넌트)-->
                <section class="main_media">
                    <h3>Media</h3>
                    <div class="md_wrap">
                        <div class="md_list">
                            <ul>
                                <MedComp v-for="(v, i) in mData" :key="i" :matchmedia="v" :dpt1val="v.depth1" :dpt2val="v.depth2"/>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- 5. 신상섹션(컴포넌트)-->
                <NewComp />
                <!-- 6. 스토어섹션 -->
                <section class="main_store">
                    <div class="store">
                        <div class="storetit">
                            <h2>OFF-LINE</h2>
                        </div>
                    </div>
                    <div class="map_search_wrap">
                        <div class="map_search">
                            <div class="tabbx">
                                <ul>
                                    <li>매장찾기</li>
                                    <li>지역검색</li>
                                </ul>
                            </div>
                            <!-- 지역검색 클릭시 표시될 부분 -->
                            <div id="map_contents">
                                <div class="txt_title2">
                                    <b>지역검색</b>
                                </div>
                                <div class="locals"></div>
                            </div>
                            <!-- 매장찾기 클릭시 표시될 부분 -->
                            <div class="txtbx">
                                <div class="txt_inner">
                                    <div class="txt_title">
                                        <b>매장찾기</b>
                                    </div>
                                    <div class="txt_cont">
                                        <label>
                                            <input type="text" id="store_search" name="store_search" placeholder="지점명을 입력하세요."/>
                                        </label>
                                        <i class="fa-regular fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="contbx">
                                <div class="cont_inner"></div>
                            </div>
                        </div>
                        <div class="map_list">
                            <div class="map_inner">
                                <div id="map"></div>
                            </div>
                            <!-- 지점 좌표 위 안내툴팁 -->
                            <div class="map_info">
                                <div class="map_info_inner">
                                    <div class="info_tit_bx">
                                        <h3>미아점</h3>
                                        <p>서울특별시 강북구 도봉로 52 (미아동) 지하2층</p>
                                        <p>02-6312-6281</p>
                                    </div>
                                    <div class="morebtn_bx">
                                        <em>자세히 보기</em>
                                    </div>
                                </div>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <!-- 하단영역 -->
        <footer id="info">
            <!-- 속박스 -->
            <div class="info">
                <!-- 푸터영역 -->
                <FootComp />
                <p class="f_copyright">
                    COPYRIGHT © WONDERPLACE ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
// 스와이퍼 불러오기
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
// 제이쿼리 불러오기
import $ from "jquery";
// 엑시오스 불러오기
import axios from "axios";
// 더미데이터
import { mData } from '../../js/gdsData/mainData.js';
// 자식컴포넌트
import BestComp from '../main/BestComp.vue';
import MedComp from '../main/MedComp.vue';
import NewComp from '../main/NewComp.vue';
import FootComp from '../common/FootComp.vue';
// 메인 CSS
import '../../scss/main.scss';

export default {
    name: 'MainComp',
    components: {
        BestComp,
        MedComp,
        NewComp,
        FootComp,
    },
    data() {
        return {
            mData: mData,
            apiData: 'null',
        };
    },
    methods: {
        fetchData() {
            axios.get('/api').then(function(res) {
                console.log("엑시오스 호출 !!", res.data);
                const mapList = document.querySelector(".cont_inner");
                let hcode = "<ul>";
                    $(res.data).each(function(a,b){
                        hcode+= `
                        <li>
                            <div class="cont_tit">
                                <b>${b.name}</b>
                            </div>
                            <div class="cont_info">
                                <p>${b.det}</p>
                            </div>
                        </li>
                        `
                    })
                hcode+= "</ul>";
                mapList.innerHTML = hcode;
            });
        },
        /************************************** 
            함수명 : rollBan
            기능 : 왼쪽방향 무한 롤링 슬라이드
        **************************************/
        rollBan() {
            // 롤링 배너 복제본 생성 
            let roller = document.querySelector('.md_list');
            roller.id = 'roller1'; // 아이디 부여
            
            // 노드 복제 (기본값은 false, 자식 노드까지 원하면 true)
            let clone = roller.cloneNode(true);
            clone.id = 'roller2';
            document.querySelector('.md_wrap').appendChild(clone); // .md_wrap 하위 자식으로 넣기

            document.querySelector('#roller1').style.left = '0px';
            document.querySelector('#roller2').style.left = document.querySelector('.md_list > ul').offsetWidth + 'px';
        },
        /************************************** 
            함수명 : storeMap
            기능 : 매장위치 좌표 지도에 표시
        **************************************/
        storeMap() {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };

            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

            // 마커를 표시할 위치와 title 객체 배열
            var positions = [
                // 서울
                {
                    title: '미아점',
                    latlng: new kakao.maps.LatLng(37.626218, 127.013474)
                },
                {
                    title: 'NC백화점 송파점',
                    latlng: new kakao.maps.LatLng(37.477774, 127.125041)
                },
                {
                    title: '홍대점',
                    latlng: new kakao.maps.LatLng(37.556568, 126.922696)
                },
                {
                    title: '2001아울렛 천호점',
                    latlng: new kakao.maps.LatLng(37.541384, 127.125996)
                },
                {
                    title: '아이파크몰 용산점',
                    latlng: new kakao.maps.LatLng(37.529943, 126.964667)
                },
                {
                    title: '타임스퀘어 영등포점',
                    latlng: new kakao.maps.LatLng(126.964667, 126.905595)
                },
                // 부산
                {
                    title: 'NC백화점 부산대점',
                    latlng: new kakao.maps.LatLng(35.232473, 129.084245)
                },
                {
                    title: '뉴코아아울렛 덕천점',
                    latlng: new kakao.maps.LatLng(35.211306, 129.007551)
                },
                {
                    title: '부산 아트몰링점',
                    latlng: new kakao.maps.LatLng(35.106692, 128.966336)
                },
                {
                    title: 'NC백화점 서면점',
                    latlng: new kakao.maps.LatLng(35.157141, 129.063072)
                },
                {
                    title: 'NC백화점 해운대점',
                    latlng: new kakao.maps.LatLng(35.170707, 129.177125)
                },
                // 인천
                {
                    title: '뉴코아아울렛 논현점',
                    latlng: new kakao.maps.LatLng(37.400955, 126.726028)
                },
                {
                    title: '스퀘어원 연수점',
                    latlng: new kakao.maps.LatLng(37.406251, 126.683756)
                },
            ];

            // 마커 이미지의 이미지 주소입니다
            var imageSrc =
                'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

            for (var i = 0; i < positions.length; i++) {
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다
                var markerImage = new kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                );

                // 마커를 생성합니다
                new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage, // 마커 이미지
                });
            }
        },
    },
    created() {
        this.fetchData();
    },
    mounted() {
        // 뷰인스턴스 저장 변수
        // const vm = this;

        // 카카오맵 API 로드후 메서드 호출!
        if (window.kakao && window.kakao.maps) {
            this.storeMap();
            setMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.storeMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=967c1df5ef6ef37cb1facf79cca53e7b';
            document.head.appendChild(script);
            setMap();
        }
        
        // 메인 배너 함수
        function bannerSwiper() {
            // 스와이퍼 커스텀
            const swiper = new Swiper('.mSwiper', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            });

            const updataImg = () => {
                const slimg = document.querySelectorAll('.mSwiper img');

                // 1320px 이하 미디어쿼리 기준점 변수
                const isMobile = window.innerWidth <= 1320;

             slimg.forEach((ele, idx) => {
                    // 기준점 변경에 따른 이미지 src 업데이트
                    // loop: true 옵션 때문에 idx 범위는 1~9! -> idx % 7 + 1 해서 1~7만 선정
                    isMobile ? ele.src = `/images/main/front/mo_${idx % 7 + 1}.jpg` :
                    ele.src = `/images/main/front/pc_${idx % 7 + 1}.jpg`;
                });
            }

            updataImg();
            swiper.on("resize", updataImg);

        } // bannerSwiper

        // 타겟선정
        const tgBox = document.querySelector(".main_special");
        const mvBox = document.querySelector(".msWrap_inner");
        const body = document.querySelector("body");
        
        const retVal = x => x.getBoundingClientRect().top;
        
        /************************************** 
            함수명 : moveSec
            기능 : 가로방향 이동하기
        **************************************/
        function moveSec() {
            // 1. 타겟박스의 바운딩위치값 찍기
            let tgPos = retVal(tgBox);
            // 오버플로우 히든 해제
            body.setAttribute('style', 'overflow: visible');

            // 2. 가로이동박스(mvbx)의 left값 변경하기
            // 타겟박스의 바운딩값을 left값으로 넣어준다!
            // 이유: 바운딩수치 === left값수치 === -3000px
            // -> 최대이동값이 마이너스로 한계값이 일치함!
            // 대상: mvbx
            // 적용구간설정: 0 이하 -3000px 이상
            if (tgPos <= 0 && tgPos >= -3000) {
                mvBox.style.left = tgPos + "px";
            }
            // 위쪽(0초과)일때 처음위치 재설정하기
            else if (tgPos > 0) {
                mvBox.style.left = "0";
            }
        }

        window.addEventListener("scroll", moveSec);
        
        function setMap() {
            $(".tabbx li").click(function() {
                // '지역검색' 클릭시 나타날 지역데이터
                const localData = ["서울", "부산", "인천"];
                const local1 = ["뒤로가기", "강북구", "송파구", "마포구", "강동구", "용산구", "영등포구"];
                const local2 = ["뒤로가기", "부산진구", "금정구", "북구", "사하구", "해운대구"];
                const local3 = ["뒤로가기", "연수구", "남동구"];

                $(this).addClass("check").siblings().removeClass("check").css({backgroundColor: "#000", color: "#fff"});
                if ($(this).is(".check")) {
                    $(this).css({backgroundColor: "#fdd000", color: "#000"})
                }
                // 지역검색 li 클릭시
                $(this).is($(".tabbx li").eq(1)) ?
                $("#map_contents").css({display: "block", width: "100%", height: "calc(100% - 53px)", position: "absolute", background: "#fff", zIndex: "1"}) && renderLocal(localData): $("#map_contents").css("display", "none");

                // 대분류 지역 데이터 출력 함수
                function renderLocal(val) {
                    const locals = $("#map_contents > .locals");
                    locals.empty();

                    val.forEach(x=> {
                        locals.append(`<h3 class="loc_thumb">${x}</h3>`);
                    });
                    $(".loc_thumb").on("click", function(e) {
                        clkTumb(e);
                    });
                } /////// renderLocal 함수 ////////

                // 중분류 서울 데이터 출력 함수
                function renderSeoul() {
                    renderLocal(local1);
                    // 뒤로가기 텍스트
                    const backtxt = $(".loc_thumb").eq(0);
                    backtxt.on("click", clkBack);
                }

                // 중분류 부산 데이터 출력 함수
                function renderBusan() {
                    renderLocal(local2);
                    // 뒤로가기 텍스트
                    const backtxt = $(".loc_thumb").eq(0);
                    backtxt.on("click", clkBack);
                }

                // 중분류 인천 데이터 출력 함수
                function renderIncheon() {
                    renderLocal(local3);
                    // 뒤로가기 텍스트
                    const backtxt = $(".loc_thumb").eq(0);
                    backtxt.on("click", clkBack);
                }

                // 뒤로가기 버튼 이벤트 핸들러
                function clkBack() {
                    renderLocal(localData);
                    $(".loc_thumb").off("click");
                    $(".loc_thumb").on("click", function(e) {
                        clkTumb(e);
                    });
                }

                // 중분류 지역 데이터 출력 함수
                function clkTumb(e) {
                    const locName = $(e.currentTarget).text();
                    switch(locName) {
                        case "서울": 
                            renderSeoul();
                            break;
                        case "부산":
                            renderBusan();
                            break;
                        case "인천": 
                            renderIncheon();
                            break;
                    }
                }
            }); //////// click /////////

            // 첫번째 li에 강제클릭
            $(".tabbx li:first").trigger("click");

            const mapList = document.querySelector(".cont_inner");
            let hcode = "<ul>";
            // vm.forEach(function(x) {
            //     hcode+= `
            //         <li>
            //             <div class="cont_tit">
            //                 <b>${vm[x].name}</b>
            //             </div>
            //             <div class="cont_info">
            //                 // <p>${vm[x].maddr}</p>
            //             </div>
            //         </li>
            //     `
            // });
            
            hcode+= "</ul>";
            mapList.innerHTML = hcode;

            $(".cont_inner li").click(function() {
                $(this).addClass("on").siblings().removeClass("on");
                // 클릭한 지점명
                // const clkTxt = $(this).find($(".cont_tit > b")).text();
                // vm.forEach(ele => {
                //     // 클릭한 지점명과 데이터명이 같은 경우 변경
                //     if (ele.mtit === clkTxt) {
                //         $(".info_tit_bx > h3").text(ele.mtit)
                //         $(".info_tit_bx > p").first().text(ele.maddr)
                //         $(".info_tit_bx > p").last().text(ele.mtel)
                //     }
                // });
            }); ////// click ///////
        }

        // 쵤초호출!
        bannerSwiper();
        this.rollBan();
    },
};
</script>

<style scoped>
    /* 메인 미디어쿼리 SCSS */
    @media screen and (max-width: 1320px) {
        .mSwiper {
            height: auto !important;
        } 
    }

    @media screen and (max-width: 900px) {
        .mbtit_bx {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 800px) {
        .md_wrap ul li {
            width: 300px !important;
        }
    }

    @media screen and (max-width: 600px) {
        .morebtn > a {
            font-size: min(1.5rem, 4vw) !important;
        }
    }
</style>