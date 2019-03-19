'use strict';
//---------------------------------------------------------------
// The traditional constructor is needed for a factory

const SeaCreature = function(tail, color) {
    this.tail = tail;
    this.color = color;
    this.swim = () => {
        return 'Moving Forward';
    };
    this.eat = () => {
        return 'Yummy';
    };
};

//----------------------------------------------------------------
function Octopus() {

    const creature1 = Object.assign(
        // {},
        new SeaCreature(0, 'red') // Creates the inheritance pattern
    );
    return Object.freeze(creature1);
}

function SeaHorse() {
    const creature2 = Object.assign(
        // {},
        {poop},
        new SeaCreature(1, 'orange'),
    );
    function poop() {
        return 'stinky!'
    }
    return Object.freeze(creature2)
}

module.exports = {Octopus, SeaHorse};