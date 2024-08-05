

class Command {
  // let MOVE = {
  //   completed: true,
  //   position: Number(),
  // };
  // let STATUS_CHECK = {
  //   completed: true,
  //   roverStatus: {
  //     mode: "NORMAL",
  //     generatorWatts: 110,
  //     position: Number(),
  //   },
  // };
  // let MODE_CHANGE = {
  //   completed: true,
  //   value: "LOW_POWER", //or should it be ["NORMAL", "LOW_POWER"],
  // };
  // commandTypesArray = [{MOVE}, {STATUS_CHECK}, {MODE_CHANGE}];
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}


module.exports = Command;
