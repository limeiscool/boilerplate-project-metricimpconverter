function ConvertHandler() {
  this.getNum = function (input) {
    // helpers
    const filterDec = (a) => a.split(".");
    const invalidD = (b) => filterDec(b).includes("");
    const invalidN = (c) => c.split(".")[1] === "";
    const decimalArr = (x) => x.split(".")[1].split("");
    const notZero = (i) => i.map((z) => Number(z) > 0).includes(true);
    //
    const number = input.replace(/[a-z]+$/i, "") || "1";

    const validate = (num) => {
      let on = num.replace(/[0-9]/g, "");
      switch (on) {
        case "./":
        case "/.":
        case "./.": {
          let [n, d] = number.split("/");
          if (invalidN(n) || invalidD(d)) {
            return "invalid number";
          } else {
            // check decimal has a number greater than 0
            switch (on) {
              case "./": {
                let nDec = decimalArr(n);
                if (notZero(nDec)) {
                  let num = Number(n);
                  let deno = Number(d);
                  return num / deno;
                } else {
                  return "invalid number";
                }
              }
              case "/.": {
                let dDec = decimalArr(d);
                if (notZero(dDec)) {
                  let num = Number(n);
                  let deno = Number(d);
                  return num / deno;
                } else {
                  return "invalid number";
                }
              }
              case "./.": {
                let nDec = decimalArr(n);
                let dDec = decimalArr(d);

                if (notZero(nDec) && notZero(dDec)) {
                  let num = Number(n);
                  let deno = Number(d);
                  return num / deno;
                } else {
                  return "invalid number";
                }
              }
              default: {
                return "invalid number";
              }
            }
          }
        }
        case "/": {
          const [n, d] = number.split("/");
          if (Number(n) === 0 || Number(d) === 0) {
            return "invalid number";
          }
          return Number(n) / Number(d);
        }
        case ".": {
          return num.split(".")[1] !== "" ? Number(num) : "invalid number";
        }
        case "": {
          return Number(num) === 0 ? "invalid number" : Number(num);
        }
        default: {
          return "invalid number";
        }
      }
    };
    return validate(number);
  };

  this.getUnit = function (input) {
    // helper
    const checkL = (arr) => {
      if (arr[0] === "l" || arr[0] === "L") {
        return true;
      } else {
        return false;
      }
    };
    let result = input.match(/[a-zA-Z]+$/);

    if (result === null) {
      return "invalid unit";
    }
    const match = ["gal", "l", "lbs", "kg", "mi", "km"];
    if (match.indexOf(result[0].toLowerCase()) != -1) {
      return checkL(result) ? "L" : result[0].toLowerCase();
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
    let rn = returnNum.toFixed(5);
    let result = `${initNum} ${initUnit} converts to ${rn} ${returnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
