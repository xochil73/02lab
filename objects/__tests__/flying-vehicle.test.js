const FlyingVehicle = require('../flying-vehicle-class.js');


describe('FlyingVehicle', () => {

    describe('Airplane', () => {

        let zoom = new FlyingVehicle.Airplane(name);

        it('has a name', () => {
            expect(zoom.name).toEqual(name);
        });

        it('can fly', () => {
            expect(zoom.fly()).toBeTruthy();
        });

        it('can land', () => {
            expect(zoom.land()).toBeTruthy();
        })}


    )});