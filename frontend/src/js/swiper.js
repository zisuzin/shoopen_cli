// 스와이퍼 불러오기
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
// 제이쿼리 불러오기
import $ from "jquery";

// 스와이퍼 함수
function swiperFn() {
    const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        slidesPerView: 3,
        resistanceRatio: 0, // 드래그시 저항 막기
    });
    
    new Swiper(".mySwiper1", { 
        navigation: {
            nextEl: ".toRbtn",
            prevEl: ".toLbtn",
        },
        thumbs: {
            swiper: swiper2,
        },
        resistanceRatio: 0, // 드래그시 저항 막기
    });

    const tg = $(".mySwiper1 .swiper-slide-active").find("img").attr("src")
    console.log(tg)

} ////// swiperFn 함수 ///////

export default swiperFn;