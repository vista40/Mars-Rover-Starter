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
          position: this.position, //Is this right? Or should it be Number()
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
    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i] === "MOVE")
        response.results.push(resultsArray[0]);
    }
    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i] === "STATUS_CHECK")
        response.results.push(resultsArray[1]);
    }
    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i] === "MODE_CHANGE")
        response.results.push(resultsArray[2]);
    }
    return response;
  }
}
module.exports = Rover;
