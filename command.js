class Command {
  // commandTypesArray = ['MOVE', 'STATUS_CHECK', 'MODE_CHANGE'];
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}

module.exports = Command;
