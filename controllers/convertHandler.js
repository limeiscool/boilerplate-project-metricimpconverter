function ConvertHandler() {
  this.getNum = function (input) {
    let result = parseFloat(input);

    return isNaN(result) ? "invalid number" : result;
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-zA-Z]+$/);
    if (result === null) {
      return "invalid unit";
    }
    const match = ["gal", "l", "lbs", "kg", "mi", "km"];
    if (match.indexOf(result[0].toLowerCase()) > -1) {
      return result === "l" ? "L" : result;
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    const unitConversions = {
      gal: "L",
      L: "gal",
      lbs: "kg",
      kg: "lbs",
      mi: "km",
      km: "mi",
    };

    return unitConversions[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const spellConversions = {
      gal: "gallons",
      l: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers",
    };

    return spellConversions[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
