const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // 7 tests here!
  test("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(254);
    expect(rover.position).toEqual(254);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });
});
// 8 tests here.
test("response returned by receive Message contains the name of the message", function () {
  let message = new Message("Test message", [""]);
  let rover = new Rover(254);
  expect(rover.receiveMessage(message).message).toEqual(message.name);
});
// 9 tests here.
test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
  let commands = [
    new Command("MODE_CHANGE", "LOW_POWER"),
    new Command("STATUS_CHECK"),
  ];
  let message = new Message("Test message", commands);
  let rover = new Rover(254);
  expect(rover.receiveMessage(message).results.length).toEqual(
    message.commands.length
  );
});
// 10 tests here.
test("responds correctly to the status check command", function () {
  let commands = [
    new Command("MODE_CHANGE", "LOW_POWER"),
    new Command("STATUS_CHECK"),
  ];
  let message = new Message("Test message", commands);
  let rover = new Rover(254);
  expect(rover.receiveMessage(message).results).toEqual([
    { completed: true },
    {
      completed: true,
      roverStatus: { generatorWatts: 110, mode: "NORMAL", position: 254 },
    },
  ]);
});
// //11 tests here.
test("responds correctly to the mode change command", function () {
  // let commandTypesArray = [MOVE, STATUS_CHECK, MODE_CHANGE];

  let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
  let message = new Message("Test message", commands);
  let rover = new Rover(254);
  //11.a tests here
  expect(rover.receiveMessage(message).results).toEqual([{ completed: true }]);
  //11.b tests here
  expect(rover.mode).toEqual("LOW_POWER");
});
//12 tests here.
test("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
  let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE")];
  let message = new Message("Test message", commands);
  let rover = new Rover(254);
  expect(rover.position).toEqual(rover.position);
  // expect(rover.receiveMessage(message).results).toEqual([
  //   { completed: false },
  //   { completed: true },
  // ]);
});
//     { completed: false },
//     { completed: true },
//   ]);
//----------------------------------------------------------------------
//     // {
//     //   completed: true,
//     //   roverStatus: { generatorWatts: 110, mode: "LOW_POWER", position: 254 },
//     // },
//   ]);
//   // expect(rover.receiveMessage(message).results).toEqual([
//   //   { completed: true },
//   //   // {
//   //   //   completed: true,
//   //   //   roverStatus: { generatorWatts: 110, mode: "LOW_POWER", position: 254 },
//   //   // },
//   // ]);
// });

//1. I want the "status check" command in message.command to correspond with the correct response message in rover.receive(message).results. '
// response message in rover.receive(message).results.
