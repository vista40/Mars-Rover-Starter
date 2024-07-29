const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  test("Throws error if a name is NOT passed into the constructor as the first parameter.", function () {
    expect(function () {
      new Message();
    }).toThrow(new Error("Name required."));
  });

  test("Constructor sets name as a property.", function () {
    let message = new Message("Test message", [""]);
    expect(message.name).toEqual("Test message");
  });

  test("Contains a commands array passed into the constructor as a 2nd argument", function () {
    let message = new Message("Test message", [""]);
    expect(message.commands).toEqual([""]);
  });
});
