document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800, // 持續時間，值從 0 到 3000，步長為 50ms | 預設：400
    easing: "ease", // AOS 動畫的默認緩動 | 預設：'ease'
    once: false, // 動畫是否應該只發生一次（向下滾動時） | 預設：false
    mirror: true, // 元素在滾動經過時是否應該反向動畫 | 預設：false
  });
});

// 🔧 修正：分別初始化兩個輪播，避免衝突
// 分類選單輪播
const headSwiper = new Swiper(".headSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4.5,
  breakpoints: {
    576: {
      // >576px (手機)
      slidesPerView: 6.5,
    },
  },
  // 🔧 加入循環功能
  loop: false, // 分類選單通常不需要循環
  // 🔧 加入拖拽功能
  allowTouchMove: true,
});

// 主視覺輪播 (保持不變，這部分是正確的)
const mainSwiper = new Swiper(".mainSwiper", {
  loop: true, // ✅ 循環功能
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".custom-pagination-wrapper .swiper-pagination",
    clickable: true,
  },
  // 新增：導航按鈕設定
  navigation: {
    nextEl: ".custom-pagination-wrapper .swiper-button-next",
    prevEl: ".custom-pagination-wrapper .swiper-button-prev",
  },
  // 🔧 加入淡入淡出效果 (可選)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
// 🔧 除錯用的控制台輸出
console.log("Head Swiper initialized:", headSwiper);
console.log("Main Swiper initialized:", mainSwiper);
