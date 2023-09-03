// 스와이퍼 불러오기
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// 스와이퍼 함수
function swiperFn() {
    console.log("swiper.js 파일의 스와이퍼다!!!")
    // 상품 상세페이지 스와이퍼 배너
    const swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    
    new Swiper(".mySwiper1", { 
        loop: true,
        navigation: {
            nextEl: ".toRbtn",
            prevEl: ".toLbtn",
        },
        thumbs: {
            swiper: swiper2,
        },
    });

} ////// swiperFn 함수 ///////

export default swiperFn;