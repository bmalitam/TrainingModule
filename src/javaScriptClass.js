class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
// complete this code hint: instantiate the class
  
  document.getElementById("demo11").innerHTML =
  "My car is " + myCar.age() + " years old.";
  
  module.exports = Car