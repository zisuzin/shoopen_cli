<template>
    <div>
        <!-- 메인영역 -->
        <main id="cont">
          <!-- 속박스 -->
          <div class="cont">
            <section class="review_area">
                <div class="event_info">
                    <img src="/images/board/best-review-event.png" alt="포토리뷰이벤트 배너">
                </div>
                <div class="winner_info">
                    <div class="winner_head">
                        <p>이 달의 Best Review 당첨자는?</p>
                    </div>
                    <div class="winner_cont">
                        <div class="prize_bx">
                            <p>2등</p>
                            <p>30,000원</p>
                        </div>
                        <div class="prize_bx">
                            <p>1등</p>
                            <p>50,000원</p>
                        </div>
                        <div class="prize_bx">
                            <p>3등</p>
                            <p>20,000원</p>
                        </div>
                    </div>
                    <div class="winner_body">
                        <ul class="reviews_gal">
                            <li v-for="(v,i) in reviews" class="reviews" :key="i">
                                <!-- 리뷰 썸네일 -->
                                <div class="review_thumb">
                                    <img :src="'/images/board/'+v.img" :alt="v.name + '님의 리뷰이미지 입니다.'">
                                </div>
                                <!-- 후기글 -->
                                <div class="review_author">
                                    <div class="review_tit">{{ v.cont }}</div>
                                    <div class="reviewr_name">{{ v.name }}</div>
                                </div>
                                <!-- 리뷰 상품 -->
                                <div class="review_prd">
                                    <div class="thumb_bx">
                                        <img :src="'/images/board/'+v.prd" :alt="v.tit">
                                    </div>
                                    <div class="info_bx">
                                        <div class="prd_tit">{{ v.tit }}</div>
                                        <div class="prd_det">
                                            <span>
                                                리뷰
                                                <strong>{{ v.review }}</strong>
                                            </span>
                                            <span>
                                                평점
                                                <strong>{{ v.score }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="view_type">
                    <div class="photo_type">
                        <a href="#">포토리뷰</a>
                    </div>
                    <div class="general_type">
                        <a href="#">일반리뷰</a>
                    </div>
                </div>
                <div class="reviews_filter">
                    <div class="dropdown">
                        <button class="btn btn-secondary op1Btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            카테고리를 선택해주세요
                        </button>
                        <ul class="dropdown-menu opt1">
                            <li><a class="dropdown-item" href="#">Shoes</a></li>
                            <li><a class="dropdown-item" href="#">Bag</a></li>
                            <li><a class="dropdown-item" href="#">Hat</a></li>
                            <li><a class="dropdown-item" href="#">Ac</a></li>
                        </ul>
                        <div class="dropdown opt2bx">
                            <button class="btn op2Btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                최신순
                            </button>
                            <ul class="dropdown-menu opt2">
                                <li><a class="dropdown-item" href="#">최신순</a></li>
                                <li><a class="dropdown-item" href="#">평점순</a></li>
                                <li><a class="dropdown-item" href="#">리뷰순</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="reviews_options_search">
                    <img src="/images/icon/review_pcpc.jpg" alt="내 체형에 맞는 리뷰 모아보기">
                    <div class="review_my_options">
                        <div class="dropdown opt3bx">
                            <button class="btn userOpt btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                키
                            </button>
                            <ul class="dropdown-menu opt3">
                                <li><a class="dropdown-item" href="#">153cm</a></li>
                                <li><a class="dropdown-item" href="#">157cm</a></li>
                                <li><a class="dropdown-item" href="#">160cm</a></li>
                                <li><a class="dropdown-item" href="#">161cm</a></li>
                                <li><a class="dropdown-item" href="#">164cm</a></li>
                                <li><a class="dropdown-item" href="#">165cm</a></li>
                                <li><a class="dropdown-item" href="#">166cm</a></li>
                                <li><a class="dropdown-item" href="#">169cm</a></li>
                                <li><a class="dropdown-item" href="#">172cm</a></li>
                                <li><a class="dropdown-item" href="#">187cm</a></li>
                                <li><a class="dropdown-item" href="#">191cm</a></li>
                            </ul>
                        </div>
                        <div class="dropdown opt4bx">
                            <button class="btn userOpt btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                몸무게
                            </button>
                            <ul class="dropdown-menu opt4">
                                <li><a class="dropdown-item" href="#">12kg</a></li>
                                <li><a class="dropdown-item" href="#">44kg</a></li>
                                <li><a class="dropdown-item" href="#">49kg</a></li>
                                <li><a class="dropdown-item" href="#">50kg</a></li>
                                <li><a class="dropdown-item" href="#">53kg</a></li>
                                <li><a class="dropdown-item" href="#">55kg</a></li>
                                <li><a class="dropdown-item" href="#">56kg</a></li>
                                <li><a class="dropdown-item" href="#">58kg</a></li>
                                <li><a class="dropdown-item" href="#">87kg</a></li>
                            </ul>
                        </div>
                        <div class="dropdown opt5bx">
                            <button class="btn userOpt btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                실착 사이즈
                            </button>
                            <ul class="dropdown-menu opt5">
                                <li><a class="dropdown-item" href="#">150cm</a></li>
                                <li><a class="dropdown-item" href="#">235cm</a></li>
                                <li><a class="dropdown-item" href="#">250cm</a></li>
                                <li><a class="dropdown-item" href="#">26호</a></li>
                                <li><a class="dropdown-item" href="#">FREE</a></li>
                                <li><a class="dropdown-item" href="#">M</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="reviews_body"></div>
            </section>
          </div>
        </main>
        <!-- 하단영역 -->
        <footer id="info">
          <!-- 속박스 -->
          <div class="info">
            <!-- 푸터영역 -->
            <FootComp />
            <p class="f_copyright">COPYRIGHT © WONDERPLACE ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
    </div>
</template>

<script>
// 제이쿼리 불러오기
import $ from "jquery";
// 하단컴포넌트
import FootComp from "../common/FootComp.vue";
// 엑시오스 불러오기
import axios from "axios";

export default {
    name: "BoardComp",
    components: {
    FootComp,
  },
    data() {
        return {
            // 베스트리뷰
            reviews: [
                {
                    img: "1-1.jpeg",
                    tit: "메리제인 스틸레토 슬링백",
                    prd: "2-1.jpg",
                    cont: "굽이 적당해서 키높이도 되면서 데일리로 신기 편해용",
                    name: "r******m",
                    review: "343",
                    score: "4.7",
                },
                {
                    img: "1-2.jpg",
                    tit: "[NAVY] 버클 베이직 메신저백",
                    prd: "2-2.jpg",
                    cont: "생각보다 컸지만 그만큼 수납이 많이 되니 대학생들 매기 딱 좋을 것 같아, 친척 동생들 선물해줬더니 너무 좋아하더라구요!",
                    name: "e******m",
                    review: "105",
                    score: "4.9",
                },
                {
                    img: "1-3.jpeg",
                    tit: "[MD 추천] 소프트 미니 퀼팅백",
                    prd: "3-1.jpg",
                    cont: "코디하기 어려울줄 알았는데 무난하게 다 잘어울리네여",
                    name: "l******m",
                    review: "299",
                    score: "4.5",
                },
            ]
        }
    },
    methods: {
        photoData(cat) {
            axios.get('/review').then(function(res) {
                const reviewList = document.querySelector('.reviews_body');

                let hcode = "<ul>";
                    $(res.data).each(function(a,b){

                        // 1. cat 값이 없거나 b.cat값이 cat과 동일한 경우에만 출력
                        if (!cat || b.cat === cat || cat === b.cm || cat === b.kg || cat === b.size) {
                        hcode+= `
                        <li>
                            <!-- 리뷰 썸네일 -->
                            <div class="review_thumb">
                                <img src="/images/board/reviews/${b.img}" alt="${b.writer}님의 리뷰이미지 입니다.">
                            </div>
                            <!-- 후기글 -->
                            <div class="review_author">
                                <div class="review_tit">${b.cont}</div>
                                <div class="reviewr_name">${b.writer}</div>
                                <div class="review_more">
                                    <span>
                                        리뷰 더보기
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 8" class="more_arrow">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M.667 2.333L4 5.667l3.333-3.334"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <!-- 리뷰 상품 -->
                            <div class="review_prd">
                                <div class="thumb_bx">
                                    <img src="/images/board/reviews/2-${b.idx}.jpg" alt="${b.tit}">
                                </div>
                                <div class="info_bx">
                                    <div class="prd_tit">${b.tit}</div>
                                    <div class="prd_det">
                                        <span>
                                            리뷰
                                            <strong>${b.review}</strong>
                                        </span>
                                        <span>
                                            평점
                                            <strong>${b.score}</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        `
                        }
                    });
                hcode+= "</ul>";
                reviewList.innerHTML = hcode;
            })
        },
    },
    mounted() {
        const vm = this;
        $(".view_type > div").click(function(e) {
            // 이벤트막기
            e.preventDefault();

            // 클래스 on 일때 css 변경
            $(this).addClass("on").siblings().removeClass("on");

            if ($(this).is('.photo_type')) {
                vm.photoData();
            }
            else if ($(this).is('.general_type')) {
                $('.reviews_body ul').css({display: "flex", flexDirection: "column"});
                $('.review_thumb').css("display", "none");
                $('.reviews_body ul li').css({display: "flex", flexDirection: "column-reverse", width: "75%", border: "none"});
                $('.reviewr_name').css("display", "none");
                $('.review_tit').css("fontSize", "13.5px");
                $('.prd_tit').css("fontSize", "13px");
                $('.prd_det').css("fontSize", "12px");
                $('.thumb_bx').css({width: "40px", height: "40px"});
                $('.info_bx').css("lineHeight", "17px");
                $('.review_more').css("display", "block");

                $('.review_more').click(function() {
                    $(this).toggleClass("on");
                    let sible = $(this).siblings()[0];

                    if ($(this).hasClass("on")) {
                        $(sible).css({whiteSpace: "inherit", textOverflow: "inherit", overflow: "inherit"});

                        $(this).find("span").html('리뷰 접기<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 8" class="more_arrow"><path stroke-linecap="round" stroke-linejoin="round" d="M.667 2.333L4 5.667l3.333-3.334"></path></svg>');
                        $(this).find("span").find("svg").css("transform", "rotate(180deg)");
                    }
                    else {
                        $(sible).css({whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"});
                        $(this).find("span").html('리뷰 더보기<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 8" class="more_arrow"><path stroke-linecap="round" stroke-linejoin="round" d="M.667 2.333L4 5.667l3.333-3.334"></path></svg>');
                        $(this).find("span").find("svg").css("transform", "inherit");
                    }
                });
            }
        });

        // 포토리뷰 탭에 트리거 발생
        $('.view_type > div').eq(0).addClass('on').trigger("click");

        // 클릭한 옵션명으로 버튼텍스트 변경
        function chgTxt() {
            let btn = $(this);

            const optList = btn.siblings()[0];
            $(optList).find("a").click(function(e) {
                e.preventDefault();

                let clkTxt = $(this).text();
                btn.text(clkTxt);

                // .op2Btn이 아닌 경우만 함수호출!
                if(!btn.is(".op2Btn")) {
                    vm.photoData(clkTxt);
                }
            });
        }

        // 옵션 버튼 클릭시 chgTxt 함수실행
        $('.btn').on('click', chgTxt);
    }
}
</script>