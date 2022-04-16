function Ship (currentPort) {
    this.currentPort = currentPort;
    this.previousPort = null;
}
Ship.prototype.setSail = function () {
    this.previousPort = this.currentPort;
    this.currentPort = false;
}

Ship.prototype.dock = function (Port) {
    this.currentPort = Port;
}






module.exports = Ship;