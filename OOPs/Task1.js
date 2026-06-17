let prompt = require("prompt-sync")();

class CabService {
  constructor() {
    this.car_type = "";
    this.km = this.bill = 0.0;
  }
  accept() {
    this.car_type = prompt("Enter car type (Ac or Non-Ac): ");
    this.km = +prompt("Enter km travelled: ");
  }
  calculate() {
    if (this.car_type == "Ac") {
      if (this.km <= 5) this.bill = 150;
      else this.bill = 150 + (this.km - 5) * 10;
    } else if (this.car_type == "Non-Ac") {
      if (this.km <= 5) this.bill = 120;
      else this.bill = 120 + (this.km - 5) * 8;
    } else console.log("Enter valid car type.");
  }
  display() {
    console.log("CAR TYPE: " + this.car_type);
    console.log("KILOMETER TRAVELLED: " + this.km);
    console.log("TOTAL BILL: " + this.bill);
  }
}

let obj = new CabService();
obj.accept();
obj.calculate();
obj.display();
