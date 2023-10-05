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
                    <div class="relative_type">
                        <a href="#">일반리뷰</a>
                    </div>
                </div>
            </section>
          </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "BoardComp",
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
    }
}
</script>