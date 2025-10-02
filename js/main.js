import "../assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

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