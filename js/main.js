import "../assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 取得網址參數
  const urlParams = new URLSearchParams(window.location.search);
  const isLoggedInParam = urlParams.get('isLoggedIn'); // 取得 isLoggedIn 的值，會是字串或 null

  const userAvatar = document.getElementById('user-avatar');
  const loginBtn = document.getElementById('loginBtn');

  // 判斷是否登入，參數是 "true" 字串才算登入
  const isLoggedIn = isLoggedInParam === 'true';

  if (isLoggedIn) {
    userAvatar.classList.remove('d-none');
    loginBtn.classList.add('d-none');
  } else {
    userAvatar.classList.add('d-none');
    loginBtn.classList.remove('d-none');
  }

  // 收藏按鈕 .iconFav 的 .active
  document.querySelectorAll(".btn-ghost").forEach((icon) => {
    icon.addEventListener("click", () => icon.classList.toggle("active"));
  });

// 購物流程區塊判斷在哪頁該如何顯示(數字+文字+虛線)
function setActiveStep(stepNumber) {
  const steps = document.querySelectorAll(".process-number");
  const texts = document.querySelectorAll(".process-text");
  const lines = document.querySelectorAll(".process-line");
  steps.forEach((step, index) => {
    if (index < stepNumber - 1) {
      step.classList.add("done");
    } else if (index === stepNumber - 1) {
      step.classList.add("inProgress");
    } else if (index > stepNumber - 1) {
      step.classList.add("next");
    }
  });
  texts.forEach((text, index) => {
    if (index < stepNumber - 1) {
      text.classList.add("done");
    } else if (index === stepNumber - 1) {
      text.classList.add("inProgress");
    } else if (index > stepNumber - 1) {
      text.classList.add("next");
    }
  });
  lines.forEach((line, index) => {
    if (stepNumber == 1) {
      line.classList.add("gray");
    } else if ((stepNumber == 2) & (index == 1)) {
      line.classList.add("gray");
    }
  });
}
// 購物流程區塊 根據 URL 判斷目前在哪一頁後執行setActiveStep()
const url = window.location.pathname;
if (url.includes("cart.html")) {
  setActiveStep(1);
} else if (url.includes("checkout.html")) {
  setActiveStep(2);
} else if (url.includes("order-complete.html")) {
  setActiveStep(3);
}