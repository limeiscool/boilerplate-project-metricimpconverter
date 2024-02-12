"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    switch (true) {
      case initNum === "invalid number" && initUnit === "invalid unit":
        res.json("invalid number and unit");
        break;
      case initNum === "invalid number":
        res.json("invalid number");
        break;
      case initUnit === "invalid unit":
        res.json("invalid unit");
        break;
      default: {
        const returnNum = convertHandler.convert(initNum, initUnit);
        const spellOutInitUnit = convertHandler.spellOutUnit(initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        const spellOutReturnUnit = convertHandler.spellOutUnit(returnUnit);
        const string = convertHandler.getString(
          initNum,
          spellOutInitUnit,
          returnNum,
          spellOutReturnUnit
        );
        let resObj = {
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: string,
        };
        res.json(resObj);
      }
    }
  });
};
