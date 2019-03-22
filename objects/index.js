'use strict';


// const Vehicle = require('./vehicle-constructor.js');
const Car = require('./vehicle-class.js');
const Motorcycle = require('./vehicle-class.js');
// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const mazda = new Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());
