const SeaCreature = require('../seacreature-class.js');


describe('SeaCreature', () => {

    describe('Fish', () => {

        let nemo = new SeaCreature.Fish(name);

        it('has a name', () => {
            expect(nemo.name).toEqual(name);
        });

        it('can swim', () => {
            expect(nemo.swim()).toBeTruthy();
        });

        it('can eat', () => {
            expect(nemo.eat()).toBeTruthy();
        })}


    )});