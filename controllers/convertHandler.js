function ConvertHandler() {
  this.getNum = function (input) {
    const number = input.replace(/[^\d./]/g, "");

    if (/^[1-9]+[\/][1-9]+$/.test(number)) {
      const [N, D] = number.split("/");
      return parseFloat(N) / parseFloat(D);
    } else if (/^[0-9]+(?:\.[0-9]+)?$/.test(number)) {
      return parseFloat(number);
    } else {
      return "invalid number";
    }
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-zA-Z]+$/);
    if (result === null) {
      return "invalid unit";
    }
    const match = ["gal", "l", "lbs", "kg", "mi", "km"];
    if (match.indexOf(result[0].toLowerCase()) > -1) {
      return result === "l" ? "L" : result[0].toLowerCase();
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
    const parseFixed = (num) => parseFloat(num.toFixed(5));

    switch (initUnit) {
      case "gal":
        return parseFixed(initNum * galToL);
      case "L":
        return parseFixed(initNum / galToL);
      case "lbs":
        return parseFixed(initNum * lbsToKg);
      case "kg":
        return parseFixed(initNum / lbsToKg);
      case "mi":
        return parseFixed(initNum * miToKm);
      case "km":
        return parseFixed(initNum / miToKm);
      default:
        return "invalid unit";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
