'use strict';
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

function sets() {
  document.getElementById("demo3").innerHTML = letters;
}

sets()