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
    //test 11 here:
    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i] === "MODE_CHANGE")
        response.results.push(resultsArray[2]);
      if (message.commands[i].value === "LOW_POWER") {
        this.mode = "LOW_POWER";
        //test 12b here:
        this.position = this.position;
        // test 12a here
        // resultsArray[0].completed = false;
        // response.results.push(resultsArray[0]);

        // }
      }
      return response;
    }
  }
}

module.exports = Rover;

// resultsArray[1].roverStatus.mode = MODE.
// I'm trying to figure out how to see if the command value contains "LOW_POWER".
//Do I need to use a for..in loop to indentify the mode in the message commands?
// I need to identy the mode in the MODE_CHANGE command so that I can push it in the results for roverStatus before I push it into the response.
// for (let i = 0; i < message.commands.length; i++) {
//   if (message.commands[i] === "MODE_CHANGE")
//     response.results
