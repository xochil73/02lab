'use strict';


class SeaCreature {
    constructor(name, tail) {
        this.name=name;
        this.tail=tail;
    }
    swim() {
        return "Moving Forward";
    }
    eat() {
        return "yummy";
    }
}
class Fish extends SeaCreature{
    constructor(name){
        super (name, 2);
    }


}

class Lobster extends SeaCreature {
    constructor(name){
        super(name, 1);
    }
    poop() {
        return "Stinky";
    }

}

module.exports = {Fish, Lobster};
