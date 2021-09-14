 var elForm = document.querySelector(".site-form");
 var elTakeInput = elForm.querySelector(".input-money");
 var elResultBox = elForm.querySelector(".resultBox");
 var elSelectBox = elForm.querySelector(".form-select");
 var elSumToDollors = elSelectBox.querySelector(".change-to-dollors");
 var elSumToEuro = elSelectBox.querySelector(".change-to-euro");
 var elSumToDirham = elSelectBox.querySelector(".change-to-dirham");

 function changeToDollors() {
   elResultBox.textContent = "$" + Math.round(elTakeInput.value / 10666.47);
 }

 function changeToEuro() {
   elResultBox.textContent = Math.round(elTakeInput.value / 12602.11) + "€";
 }

 function changeToDirham() {
   elResultBox.textContent = Math.round(elTakeInput.value / 2904.05) + "Dhs";
 }
 elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();
   if (elSelectBox.value == "ChangeToDollors") {
     changeToDollors();
   } else if (elSelectBox.value == "changeToEuros") {
     changeToEuro();
   } else {
     changeToDirham();
   }
 })



