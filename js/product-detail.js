// 下單數量
  const input = document.getElementById("orderNum");
  const btnIncrease = document.querySelector(".btn-increase");
  const btnDecrease = document.querySelector(".btn-decrease");

  btnIncrease.addEventListener("click", () => {
    if (input.value < input.max) {
      input.value = parseInt(input.value) + 1;
    }
  });

  btnDecrease.addEventListener("click", () => {
    if (input.value > input.min) {
      input.value = parseInt(input.value) - 1;
    }
  });

  // 商品輪播縮列圖中的 .active ( 商品詳情頁 )
  // 1) 取到所有縮圖按鈕
  const carouselEl = document.querySelector("#prodCarousel");
  const thumbs = document.querySelectorAll(
    ".carousel-indicators.smallImg [data-bs-slide-to]"
  );

  // 2) 依索引設定 active（只保留一個）
  function setActiveByIndex(i) {
    thumbs.forEach((b) => {
      const idx = Number(b.dataset.bsSlideTo);
      b.classList.toggle("active", idx === i);
    });
  }

  // 3) 點縮圖就先切外觀
  thumbs.forEach((b) => {
    b.addEventListener("click", () => {
      const i = Number(b.dataset.bsSlideTo);
      setActiveByIndex(i);
    });
  });

  // 4) 輪播真正完成切換（含左右箭頭/滑動/自動）再同步一次
  carouselEl.addEventListener("slid.bs.carousel", (e) => {
    setActiveByIndex(e.to); // Bootstrap 事件物件會帶 from/to
  });