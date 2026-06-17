let prompt = require("prompt-sync")();

class RailwayTicket {
  constructor() {
    this.name = "";
    this.coach = "";
    this.mob_no = 0;
    this.amt = 0;
    this.total_amt = 0;
  }
  accept() {
    this.name = prompt("Enter name of customer: ");
    this.coach = prompt(
      "Enter type of coach you want to travel (First_AC, Second_AC, Third_AC, Sleeper): ",
    );
    this.mob_no = +prompt("Enter your mobile number: ");
    this.amt = +prompt("Enter amount of ticket: ");
  }
  update() {
    if (this.coach == "First_AC") this.total_amt = 700 * this.amt;
    else if (this.coach == "Second_AC") this.total_amt = 500 * this.amt;
    else if (this.coach == "Third_AC") this.total_amt = 250 * this.amt;
    else if (this.coach == "Sleeper") this.total_amt = 0 * this.amt;
    else console.error("Enter Valid Coach.");
  }
  display() {
    console.log("NAME:" + this.name);
    console.log("COACH:" + this.coach);
    console.log("MOBILE NUMBER:" + this.mob_no);
    console.log("TOTAL AMOUNT:" + this.total_amt);
  }
}

let obj = new RailwayTicket();
obj.accept();
obj.update();
obj.display();
