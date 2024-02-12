const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("read", () => {
    test("convertHandler.getNum should return 100", (done) => {
      assert.equal(convertHandler.getNum("100"), 100);
      done();
    });
  });
});
