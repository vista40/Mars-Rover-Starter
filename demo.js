// test 12 check
const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE")];
let message = new Message("Test message", commands);
let rover = new Rover(254);
let response = rover.receiveMessage(message);

console.log(response);
