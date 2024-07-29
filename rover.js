class Rover {
  // Write code here!
  constructor(position) {
    this.position = Number(position);
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
}

module.exports = Rover;
