const Itinerary = require ('../src/Itinerary.js');
const Port = require('../src/Port.js');


describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports' , () => {
        //these two are instances of port//
        const dover = jest.fn();
        const calais = jest.fn();
        const itinerary = new Itinerary([dover, calais]);
        expect (itinerary.ports).toEqual([dover, calais]);
    });
});