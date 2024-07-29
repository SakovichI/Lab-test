import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".reviews-slider", {
  wrapperClass: "reviews-slider__wrap",
  slideClass: "reviews-slider__slide",
  slidesPerView: 1,
  spaceBetween: 32,
  autoHeight: true,
  breakpoints: {
    690: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
  navigation: {
    prevEl: ".reviews-slider__btn--prev",
    nextEl: ".reviews-slider__btn--next",
  },
  pagination: {
    el: ".reviews-slider__pagination",
    clickable: true,
  },
});
