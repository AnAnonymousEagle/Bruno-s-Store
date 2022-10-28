function totalPrice() {
  let spinachPrice = 150;
  let spinachQuantity = document.getElementById("QuantitySpinach").value;
  let spinachTotalPrice = spinachPrice * spinachQuantity;
  document.getElementById("spinachTotal").innerHTML = spinachTotalPrice;

  let asparagusPrice = 95;
  let asparagusQuantity = document.getElementById("QuantityAsparagus").value;
  let asparagusTotalPrice = asparagusPrice * asparagusQuantity;
  document.getElementById("asparagusTotal").innerHTML = asparagusTotalPrice;

  let brocolliPrice = 120;
  let brocolliQuantity = document.getElementById("QuantityBrocolli").value;
  let brocolliTotalPrice = brocolliPrice * brocolliQuantity;
  document.getElementById("brocolliTotal").innerHTML = brocolliTotalPrice;
  let totalAmount = spinachTotalPrice + asparagusTotalPrice + brocolliTotalPrice;

  document.getElementById("totalAmount").innerHTML = totalAmount;
  let totalDiscount = document.getElementById("totalDiscount").value;
  totalDiscount = totalDiscount / 100;
  let totalLess = totalAmount * totalDiscount;
  document.getElementById("totalLess").innerHTML = totalLess;
  
  totalDue = totalAmount - totalLess;
  document.getElementById("totalDue").innerHTML = totalDue;

  let totalCash = document.getElementById("totalCash").value;

  if (totalCash != 0){
    totalChange = totalCash - totalDue;
    document.getElementById("totalChange").innerHTML = totalChange;
  } else {
    document.getElementById("totalChange").innerHTML = 0;
  }

  if (totalChange < 0) {
    document.getElementById("totalChange").style.color = "red";
  } else {
    document.getElementById("totalChange").style.color = "green";
  }
}
