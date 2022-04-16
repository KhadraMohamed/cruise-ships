const Itinerary = require ('../src/Itinerary.js');
const Port = require('../src/Port.js');


describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports' , () => {
        //these two are instances of port//
        const dover = new Port ('Dover');
        const calais = new Port ('Calais');
        const itinerary = new Itinerary([dover, calais]);
        expect (itinerary.ports).toEqual([dover, calais]);
    });
});