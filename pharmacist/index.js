// Design a class pattern for the following requirements using JavaScript.

// A pharmacist writes prescriptions to people.

// A cashier collects cash and returns cash to pharmacy

// A manager manages employees

// A manager can sometimes work as a cashier and a pharmacist.

class Manager {
  constructor(name) {
    this.name = name;
  }
}

let pharmicist = {
  medicine: "Sona Moja",

  prescripes: function () {
    console.log(`${this.medicine} was prescibes to Patient`);
  },
};

let cashier = {
  cash: 800,

  payment: function () {
    console.log(` The cashier passes ${this.cash} to pharmacy`);
  },
};

let manager = new Manager("Moses");

Object.assign(manager, pharmicist, cashier);

manager.collection();
