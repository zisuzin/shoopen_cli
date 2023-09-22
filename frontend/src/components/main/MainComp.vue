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
                        <div class="morebtn">
                            <a href="#">전체보기</a>
                        </div>
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
                    <div class="mSwiper3 mySwiper">
                        <h3>MEDIA</h3>
                        <ul class="swiper-wrapper">
                            <MedComp v-for="(v, i) in mData" :key="i" :matchmedia="v" :dpt1val="v.depth1" :dpt2val="v.depth2"/>
                        </ul>
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
                                        <h3>점프밀라노점</h3>
                                        <p>
                                            서울특별시 강남구 강남대로 432
                                            점프밀라노 강남점 지하1층
                                        </p>
                                        <p>02-6203-6881</p>
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
// 지도 관련 함수
import mapSearch from '../../js/map.js';
// 스와이퍼 불러오기
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
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
        };
    },
    methods: {
        storeMap() {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };

            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 마커를 표시할 위치와 title 객체 배열입니다
            var positions = [
                {
                    title: '카카오',
                    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
                },
                {
                    title: '생태연못',
                    latlng: new kakao.maps.LatLng(33.450936, 126.569477),
                },
                {
                    title: '텃밭',
                    latlng: new kakao.maps.LatLng(33.450879, 126.56994),
                },
                {
                    title: '근린공원',
                    latlng: new kakao.maps.LatLng(33.451393, 126.570738),
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
        axios.get('/api').then(res => console.log(res.data)) 
        .catch(error => console.log(error));
    },
    mounted() {
        // 카카오맵 API 로드후 메서드 호출!
        if (window.kakao && window.kakao.maps) {
            this.storeMap();
            mapSearch();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.storeMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=967c1df5ef6ef37cb1facf79cca53e7b';
            document.head.appendChild(script);
            mapSearch();
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

        // 쵤초호출!
        bannerSwiper();
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
</style>