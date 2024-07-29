class Rover {
  // Write code here!
  constructor(position) {
    this.position = Number(position);
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let response = {
      message: message.name,
      results: [],
    };
    return response;
    //   console.log(response);
    //   // let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    //   // let message = new Message('Test message with two commands', commands);
    //   // let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    // }
  }
}

module.exports = Rover;
