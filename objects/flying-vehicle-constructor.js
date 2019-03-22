'use strict';

// /_______________________________________
// variables (name, wheels)
// behavior (drive, stop)
const FlyingVehicle = function (name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.fly = () => {
  return 'Up, up and away!';
};

Vehicle.prototype.land = () => {
  return 'Landing';
};
// ____________________________
// Airplane Constructor
// variables (nothing)
// behavior (n/A)
const Airplane = function (name) {
  FlyingVehicle.call(this, name, 4);
};

Airplane.prototype.barrelRoll = () => {
  return 'Hang on!';
};

Airplane.prototype = new FlyingVehicle();
// Helicopter Constructor
// variables((n/A)
// behvavior/functions (wheels)
const Helicopter = function (name) {
  Vehicle.call(this, name, 3);
};

Helicopter.prototype = new FlyingVehicle();


module.exports = { Airplane, Helicopter };
