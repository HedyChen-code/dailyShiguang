 const headSwiperFreez = new Swiper(".headSwiper-freez", {
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