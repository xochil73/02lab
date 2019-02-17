'use strict';
///_______________________________________
//variables (name, wheels)
//behavior (drive, stop)
const Vehicle = function(name, wheels) {
    this.name = name;
    this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
    return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
    return 'Stopping';
};
//____________________________
// Car Constructor
//variables (nothing)
//behavior (n/A)
const Car = function(name) {
    Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();
//Motorcylce Constructor
//variables((n/A)
//behvavior/functions (wheels)
const Motorcycle = function(name) {
    Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
    return 'Wheee!';
};

module.exports = {Car, Motorcycle};