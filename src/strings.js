'use strict';
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes

function counter() {
  document.getElementById("app").innerHTML = carName1 + " " + carName2; 
}

counter();
