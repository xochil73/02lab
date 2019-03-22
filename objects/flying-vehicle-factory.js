'use strict';

//---------------------------------------------------------------
// The traditional constructor is needed for a factory

const FlyingVehicle = function (name, wheels) {
  this.name = name;
  this.wheels = wheels;
  this.fly = () => {
    return 'Moving Forward';
  };
  this.land = () => {
    return 'Stopping';
  };
};

//----------------------------------------------------------------
function Airplane(name) {
  // This 'should' have the same interface as Vehicle but it should add "color"
  const airplane = Object.assign(
    // {},
    new FlyingVehicle(name, 4), // Creates the inheritance pattern
  );
  function barrelRoll() {
    return 'Hang on!';
  }
  return Object.freeze(airplane);
}

function Helicopter(name) {
  const motorbike = Object.assign(
    // {
    new Vehicle(name, 2),
  );

  return Object.freeze(motorbike);
}

module.exports = { Airplane, Helicopter };
