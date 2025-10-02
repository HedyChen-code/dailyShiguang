 // 結帳頁面選取寄送資訊時變更CSS
  // 定義每組 radio 的選擇器
const radioGroups = [
  'input[type="radio"][name="shipping-information-radio"]',
  'input[type="radio"][name="shipping-creditcard-radio"]',
  'input[type="radio"][name="shipping-invoicetype-radio"]',
  'input[type="radio"][name="shipping-invoicepersonal-radio"]'
];

// 合併所有 radio 元素
const allRadios = radioGroups
  .map(selector => Array.from(document.querySelectorAll(selector)))
  .flat();

function updateBorders() {
  // 清除所有 .form-check 的 active-border
  document.querySelectorAll(".form-check").forEach(el =>
    el.classList.remove("active-border")
  );

  // 為所有 checked radio 加上 active-border
  allRadios.forEach(radio => {
    if (radio.checked) {
      const formCheck = radio.closest(".form-check");
      if (formCheck) {
        formCheck.classList.add("active-border");
      }
    }
  });
}

// 為所有 radio 綁定 change 事件
allRadios.forEach(radio =>
  radio.addEventListener("change", updateBorders)
);

// 頁面初始化執行一次，處理預設選項
updateBorders();

// 先抓取發票類型的 radio buttons
const invoiceTypeRadios = document.querySelectorAll('input[name="shipping-invoicetype-radio"]');

// 抓取 collapse 元素
const collapsePersonal = document.getElementById('collapsePersonal');

// Bootstrap collapse 實例
const bsCollapsePersonal = bootstrap.Collapse.getOrCreateInstance(collapsePersonal);

invoiceTypeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.id === 'shipping-invoicetype-1' && radio.checked) {
      // 選擇個人，展開個人區塊
      bsCollapsePersonal.show();
    } else if (radio.id === 'shipping-invoicetype-2' && radio.checked) {
      // 選擇公司，收起個人區塊
      bsCollapsePersonal.hide();
    }
  });
});

// 選取手機載具 input 欄位
const personalCarrierInput = document.getElementById('companyTaxId');

// 選取個人發票的 radio 按鈕
const personalInvoiceRadio = document.getElementById('shipping-invoicetype-1');

// 手機載具radio
const personalCarrierRadio = document.getElementById('shipping-invoicepersonal-1'); 

personalCarrierInput.addEventListener('focus', () => {
  // 選擇個人發票 radio
  if (!personalInvoiceRadio.checked) {
    personalInvoiceRadio.checked = true;
    bsCollapsePersonal.show();
  }

  // 選擇手機載具 radio
  if (!personalCarrierRadio.checked) {
    personalCarrierRadio.checked = true;
  }

  // 更新邊框樣式，讓 active-border 跟著 radio 狀態改變
  updateBorders();
});
