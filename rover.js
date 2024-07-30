class Rover {
  // Write code here!
  constructor(position) {
    this.position = Number(position);
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let resultsArray = [
      { completed: true },
      {
        completed: true,
        roverStatus: {
          mode: "NORMAL",
          generatorWatts: 110,
          position: 87382098,
        },
      },
      { completed: true },
    ];
    let response = {
      message: message.name,
      results: [],
    };
    for (let i = 0; i < message.commands.length; i++) {
      response.results.push(resultsArray[i]);
    }
    return response;
  }
}

//   console.log(response);
//   // let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
//   // let message = new Message('Test message with two commands', commands);
//   // let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// }

module.exports = Rover;
