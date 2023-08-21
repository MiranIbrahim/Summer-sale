function getName(cardID) {
  const cardName = document.getElementById(cardID).innerText;
  return cardName;
}
function getPrice(priceID) {
  const cardPriceString = document.getElementById(priceID).innerText;
  const cardPrice = parseFloat(cardPriceString);
  return cardPrice;
}

function setPrice(cardPrice, prevPrice) {
  const price = getPrice(cardPrice);
  const currPrice = getPrice(prevPrice);
  const newPrice = price + currPrice;
  document.getElementById("total-price").innerText = newPrice.toFixed(2);
  document.getElementById("total").innerText = newPrice.toFixed(2);

  const paymentBtn = document.getElementById("payment-btn"); // Get the button element
  const isConditionMet1 = true;
  if (newPrice > 0) {
    paymentBtn.removeAttribute("disabled");
  } else {
    paymentBtn.setAttribute("disabled", "disabled");
  }

  const couponBtn = document.getElementById("coupon-btn"); // Get the button element
  const isConditionMet2 = true;
  if (newPrice > 200) {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", "disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", function () {
    const couponText = document.getElementById("coupon-text").value;

    if (couponText === "SELL200") {
      document.getElementById("discount").innerText = (newPrice * 0.2).toFixed(2);
      const finalPrice = newPrice * 0.8;
      document.getElementById("total").innerText = finalPrice.toFixed(2);
    } else {
      alert('Sorry this coupon code is not available');
    }
  });

  document.getElementById("go-btn").addEventListener("click", function () {
    document.getElementById("total-price").innerText = '0.00';
    document.getElementById("discount").innerText = '0.00';
    document.getElementById("total").innerText = '0.00';
    document.getElementById("coupon-text").value = '';
    paymentBtn.setAttribute("disabled", "disabled");
    couponBtn.setAttribute("disabled", "disabled");
    deleteChild();  
  });
  
}
function deleteChild() {
    var e = document.getElementById("product-entry");
    
    //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
var btn = document.getElementById(
"go-btn").onclick = function() {
    deleteChild();
}
// Product Entry
function addProductEntry(cardName) {
  const name = getName(cardName);
  const productEntry = document.getElementById("product-entry");

  const count = productEntry.childElementCount;

  const p = document.createElement("p");
  p.innerHTML = `<b>${count + 1}. ${name}</b>`;
  productEntry.appendChild(p);
}
