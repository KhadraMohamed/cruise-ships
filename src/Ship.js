function Ship (Port) {
    this.name = Ship;
    this.currentPort = Port;
}
Ship.prototype.setSail = function () {
    this.setSail = false
}
Ship.prototype.dock = function (Port) {
    this.currentPort = Port;
}






module.exports = Ship;