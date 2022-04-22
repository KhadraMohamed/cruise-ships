const Port = require ('../src/Port.js');

describe ('Port' , () => {
    describe ('Ports can add and remove a ship' , () => {
        let port;
        beforeEach(() => {
        port = new Port ('Dover');
        ship = {};  
    });
    it('can be instantiated' , () => {
        expect(new Port()).toBeInstanceOf(Object);
});
it('can add a ship' ,() => {
    const port = new Port ('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
});
it('can remove a ship' , () => {
    const port = new Port ('Dover');
    const titanic = {};
    const queenMary = {}
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([queenMary]);
});
    });
});