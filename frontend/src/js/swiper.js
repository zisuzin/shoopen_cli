// 스와이퍼 불러오기
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// 서브 - 디테일페이지
// 스와이퍼 함수
function dtSwiper() {
    const swiper2 = new Swiper('.mySwiper2', {
        spaceBetween: 10,
        slidesPerView: 3,
        resistanceRatio: 0, // 드래그시 저항 막기
    });

    new Swiper('.mySwiper1', {
        navigation: {
            nextEl: '.toRbtn',
            prevEl: '.toLbtn',
        },
        thumbs: {
            swiper: swiper2,
        },
        resistanceRatio: 0, // 드래그시 저항 막기
    });
} ////// swiperFn 함수 ///////

let setSwiper;

function btSwiper() {
    console.log("bt스와이퍼 작동중!")
    if (setSwiper) {
        // 이미 Swiper 인스턴스가 있으면 파괴하고 다시 생성
        setSwiper.destroy();
    }
    
    setSwiper = new Swiper('.btSwiper', {
        spaceBetween: 20,
        slidesPerView: 4,
        resistanceRatio: 0, // 드래그시 저항 막기
        breakpoints: {
            // when window width is >= 900px
            900: {
                slidesPerView: 4,
            },
            // when window width is >= 700px
            700: {
                slidesPerView: 3,
            },
            // when window width is >= 600px
            600: {
                slidesPerView: 2,
            },
            // when window width is >= 300px
            300: {
                slidesPerView: 1,
            }
        }
    });
}

export {dtSwiper, btSwiper};
