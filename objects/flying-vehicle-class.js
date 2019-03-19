'use strict';


class FlyingVehicle {
    constructor(name, wheels) {
        this.name=name;
        this.wheels=wheels;
    }
    fly() {
        return 'Up, up and away!';
    }
    land() {
        return 'Landing';
    }
}
class Airplane extends FlyingVehicle {
    constructor(name){
        super (name, 4);
    }
    barrelRoll() {
        return "Hang On!"
    }


}

class Helicopter extends FlyingVehicle {
    constructor(name){
        super(name, 3);
    }


}

module.exports = {Airplane, Helicopter};
