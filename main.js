import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

new Swiper('.swiper', {
    autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  slidesPerView: 4.5,
  breakpoints: {
    576: { // >576px (手機)
      slidesPerView: 6.5,
    },
  },
});
// 主視覺js
const swiper = new Swiper(".mainSwiper", {
  loop: true, // ✅ 加這行才能前後循環
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // ✅ 點 pagination 可以切換
  },
});