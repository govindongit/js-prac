// Using es6 classes create objects in JavaScript
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car1 = new Vehicle("GT", "BMW", "1998cc");

console.log(car1.name); //GT
