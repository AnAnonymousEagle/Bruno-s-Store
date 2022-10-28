function totalPrice() {
  let spinachPrice = 150
  let spinachQuantity = document.getElementById("QuantitySpinach").value;

  let spinachTotalPrice = spinachPrice * spinachQuantity;

  document.getElementById("spinachTotal").innerHTML = spinachTotalPrice;




  let asparagusPrice = 95
  let asparagusQuantity = document.getElementById("QuantityAsparagus").value;

  let asparagusTotalPrice = asparagusPrice * asparagusQuantity;

  document.getElementById("asparagusTotal").innerHTML = asparagusTotalPrice;


  let brocolliPrice = 120
  let brocolliQuantity = document.getElementById("QuantityBrocolli").value;

  let brocolliTotalPrice = brocolliPrice * brocolliQuantity;

  document.getElementById("brocolliTotal").innerHTML = brocolliTotalPrice;


  let totalAmount = spinachTotalPrice + asparagusTotalPrice + brocolliTotalPrice;

  document.getElementById("totalAmount").innerHTML = totalAmount;




  let totalDiscount = document.getElementById("totalDiscount").value;

  totalDiscount = totalDiscount / 100

  let totalLess = totalAmount * totalDiscount
  
  document.getElementById("totalLess").innerHTML = totalLess;


  totalDue = totalAmount - totalLess

  document.getElementById("totalDue").innerHTML = totalDue;

  let totalCash = document.getElementById("totalCash").value;

  totalChange = totalCash - totalDue
  
  document.getElementById("totalChange").innerHTML = totalChange;
}

// function mask(id){
//   const elm = document.getElementById(id);
//   const suffix = ' %';
//   const bypass = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93];
  
//   const saveValue = (data) => {
//     elm.dataset.value = data;
//   };
  
//   const pureValue = () => {
//     let value = elm.value.replace(/\D/g, '');
//     value = parseInt(value.replace(suffix, ''))
//     return value || '';
//   };
  
//   const focusNumber = () => {
//     elm.setSelectionRange(elm.dataset.value.length, elm.dataset.value.length);
//   };
  
//   elm.addEventListener('keyup', (e) => {
//     if (bypass.indexOf(e.keyCode) !== -1) return;
    
//     const pure = pureValue();
//     saveValue(pure);
    
//     if (!pure) {
//       elm.value = '';
//       return;
//     }

//     elm.value = pure + suffix;
//     focusNumber();
//   });
// }
// mask('me');

// https://codepen.io/froskie/pen/jrQoNx