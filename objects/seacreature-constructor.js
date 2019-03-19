'use strict';
///_______________________________________
//variables (tail, color)
//behavior (swim, eat)
const SeaCreature = function(tail, color) {
    this.tail = tail;
    this.color = color;
};

SeaCreature.prototype.swim = () => {
    return 'Moving Forward';
};

SeaCreature.prototype.eat = () => {
    return 'Yummy';
};
//____________________________
// Octopus Constructor
//variables (nothing)
//behavior (n/A)
const Octopus = function() {
    SeaCreature.call(this, 0, 'red');
};

Octopus.prototype = new SeaCreature();
//Seahorse Constructor
//variables((n/A)
//behvavior/functions (poop)
const SeaHorse = function() {
    SeaCreature.call(this,1,'orange');
};

SeaHorse.prototype = new SeaCreature();

SeaHorse.prototype.poop = () => {
    return 'stinky!';
};

module.exports = {Octopus, SeaHorse};