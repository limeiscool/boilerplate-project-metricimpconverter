const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    test("Whole number", (done) => {
      let input = "32lbs";
      let expected = 32;
      let actual = convertHandler.getNum(input);
      assert.equal(actual, expected);
      done();
    });

    test("Decimal number", (done) => {
      let input = "32.16lbs";
      let expected = 32.16;
      let actual = convertHandler.getNum(input);
      assert.equal(actual, expected);
      done();
    });

    test("Fraction", (done) => {
      let input = "1/2lbs";
      let expected = 0.5;
      let actual = convertHandler.getNum(input);
      assert.equal(actual, expected);
      done();
    });

    test("Fraction w/ decimal", (done) => {
      let input = ["1/2.5lbs", "1.5/3lbs", ".5/2lbs", ".5/0.2lbs"];
      let expected = [0.4, 0.5, 0.25, 2.5];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getNum(el), expected[i]);
      });
      done();
    });

    test("Invalid Input", (done) => {
      let input = ["3/2/L", "3.56.5mi"];
      let expected = ["invalid number", "invalid number"];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getNum(el), expected[i]);
      });
      done();
    });

    test("No Numerical Input", (done) => {
      let input = ["lbs", "mi"];
      let expected = [1, 1];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getNum(el), expected[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", (done) => {
    test("Valid Units", (done) => {
      let input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];
      let expected = [
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
      ];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getUnit(el), expected[i]);
      });
      done();
    });

    test("Invalid Units", (done) => {
      let input = ["32M", "53cm", "45xg"];
      let expected = ["invalid unit", "invalid unit", "invalid unit"];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getUnit(el), expected[i]);
      });
      done();
    });
  });
});
