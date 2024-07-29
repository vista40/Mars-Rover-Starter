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
  // 8 tests here.
  test('response returned by receive Message contains the name of the message', function () {
    let message = new Message("Test message", [""]);
     expect(message.name).toEqual(response.message);
  });

  });
