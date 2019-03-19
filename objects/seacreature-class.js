'use strict';


class SeaCreature {
    constructor(tail, color) {
        this.tail=tail;
        this.color=color;
    }
    swim() {
        return "Moving Forward";
    }
    eat() {
        return "yummy";
    }
}
class Octopus extends SeaCreature{
    constructor(){
        super (0, 'red');
    }


}

class SeaHorse extends SeaCreature {
    constructor(){
        super(1, 'orange');
    }
    poop() {
        return "Stinky";
    }

}

module.exports = {Octopus, SeaHorse};
