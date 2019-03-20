'use strict';
//---------------------------------------------------------------
// The traditional constructor is needed for a factory

const SeaCreature = function(name, tail) {
    this.name = name;
    this.tail = tail;

};

//----------------------------------------------------------------
function Fish(name) {

    const creature1 = Object.assign(
         {},
        {name},
        {tail},
        {swim},
        new SeaCreature(name, 2) // Creates the inheritance pattern
    );
    function swim () {
        return 'Moving forward!';
    }
    return Object.freeze(creature1);
}

function Lobster(name, poop) {
    const creature2 = Object.assign(
         {},
        {name},
        {swim},
        {poop},
        new SeaCreature(name, 1),
    );
    function poop() {
        return 'stinky!'
    }
    return Object.freeze(creature2)
}

module.exports = {Fish, Lobster};