//購物車頁面+結帳頁面 釘選在下方的總計 使用gsap在指定位置取消釘選
  gsap.registerPlugin(ScrollTrigger);

  const footer = document.getElementById("sticky-footer");

  let triggerInstance = null;

  function setupScrollTrigger() {
    // 移除先前註冊的 ScrollTrigger（如果有的話）
    if (triggerInstance) {
      triggerInstance.kill();
      triggerInstance = null;
    }

    if (window.innerWidth >= 992) {
      // 桌面版才註冊
      triggerInstance = ScrollTrigger.create({
        trigger: "#pay",
        start: "top bottom",
        end: "bottom center",
        onEnter: () => {
          gsap.to(footer, { y: 100, opacity: 0, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(footer, { y: 0, opacity: 1, duration: 0.3 });
        },
      });
    } else {
      // 手機版，恢復 footer 狀態
      gsap.to(footer, { y: 0, opacity: 1, duration: 0.3 });
    }
  }

  // 初始化一次
  setupScrollTrigger();

  // 加 debounce 防止 resize 過於頻繁觸發
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setupScrollTrigger();
    }, 200);
  });
