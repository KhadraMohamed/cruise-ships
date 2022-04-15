const Ship = require ('../src/Ship.js');
const Port = require ('../src/Port.js');

describe ('Ship' , () => {
    it('can be instantiated' , () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port' , () => {
        const port = new Port ('Dover');
        const ship = new Ship (Port);
        expect(ship.currentPort).toBe(Port);
    }); 
    it('can set sail' , () => {
        const port = new Port ('Dover');
        const ship = new Ship (Port);
        ship.setSail();
        expect(ship.setSail).toBeFalsy();
    });
    it('can dock at a different port' , () => {
        const dover = new Port ('Dover');
        const ship = new Ship (dover);
        const calais = new Port ('Calais');
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });
});