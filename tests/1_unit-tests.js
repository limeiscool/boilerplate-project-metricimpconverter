const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  // convertHandler should correctly read a whole number input.
  test("convertHandler should correctly read a whole number input.", () => {
    assert.equal(convertHandler.getNum("12"), 12);
  });
  // convertHandler should correctly read a decimal input.
  test("convertHandler should correctly read a decimal input.", () => {
    assert.equal(convertHandler.getNum("12.3"), 12.3);
  });
  // convertHandler should correctly read a fraction input.
  test("convertHandler should correctly read a fraction input.", () => {
    assert.equal(convertHandler.getNum("12/3"), 4);
  });
  // convertHandler should correctly read a fraction input with a decimal.
  test("convertHandler should correctly read a fraction input with a decimal.", () => {
    assert.equal(convertHandler.getNum("12.3/3"), 4.1);
  });
});
