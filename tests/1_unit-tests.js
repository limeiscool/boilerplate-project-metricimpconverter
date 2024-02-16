const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    // 1
    test("Whole number", (done) => {
      let input = "32lbs";
      let expected = 32;
      let actual = convertHandler.getNum(input);
      assert.equal(actual, expected);
      done();
    });

    // 2
    test("Decimal number", (done) => {
      let input = "32.16lbs";
      let expected = 32.16;
      let actual = convertHandler.getNum(input);
      assert.equal(actual, expected);
      done();
    });

    // 3
    test("Fraction", (done) => {
      let input = "1/2lbs";
      let expected = 0.5;
      let actual = convertHandler.getNum(input);
      assert.equal(actual, expected);
      done();
    });

    // 4
    test("Fraction w/ decimal", (done) => {
      let input = ["1/2.5lbs", "1.5/3lbs", ".5/2lbs", ".5/0.2lbs"];
      let expected = [0.4, 0.5, 0.25, 2.5];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getNum(el), expected[i]);
      });
      done();
    });

    // 5
    test("Error on double fraction and decimal", (done) => {
      let input = ["3/2/L", "3.56.5mi"];
      let expected = ["invalid number", "invalid number"];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getNum(el), expected[i]);
      });
      done();
    });

    // 6
    test("default of 1 when no input given", (done) => {
      let input = "";
      let expected = 1;
      assert.equal(convertHandler.getNum(input), expected);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", (done) => {
    // 7
    test("Correctly read Valid Units", (done) => {
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

    // 8
    test("Return error for Invalid Units", (done) => {
      let input = ["32M", "53cm", "45xg"];
      let expected = ["invalid unit", "invalid unit", "invalid unit"];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getUnit(el), expected[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", (done) => {
    // 9
    test("Return correct return unit for Valid Units", (done) => {
      let input = ["gal", "L", "mi", "km", "lbs", "kg"];
      let expected = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach((el, i) => {
        assert.equal(convertHandler.getReturnUnit(el), expected[i]);
      });
      done();
    });
    // 11
    test("Converts gal to L", (done) => {
      let input = "gal";
      let expected = "L";
      assert.equal(convertHandler.getReturnUnit(input), expected);
      done();
    });
    // 12
    test("Converts L to gal", (done) => {
      let input = "L";
      let expected = "gal";
      assert.equal(convertHandler.getReturnUnit(input), expected);
      done();
    });
    // 13
    test("Converts mi to km", (done) => {
      let input = "mi";
      let expected = "km";
      assert.equal(convertHandler.getReturnUnit(input), expected);
      done();
    });
    // 14
    test("Converts km to mi", (done) => {
      let input = "km";
      let expected = "mi";
      assert.equal(convertHandler.getReturnUnit(input), expected);
      done();
    });
    // 15
    test("Converts lbs to kg", (done) => {
      let input = "lbs";
      let expected = "kg";
      assert.equal(convertHandler.getReturnUnit(input), expected);
      done();
    });
    // 16
    test("Converts kg to lbs", (done) => {
      let input = "kg";
      let expected = "lbs";
      assert.equal(convertHandler.getReturnUnit(input), expected);
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", (done) => {
    // 10
    test("Return turn spelled out Valid Units", (done) => {
      let input = ["gal", "L", "mi", "km", "lbs", "kg"];
      let expected = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      input.forEach((el, i) => {
        assert.equal(convertHandler.spellOutUnit(el), expected[i]);
      });
      done();
    });
  });
});
