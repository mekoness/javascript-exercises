const ftoc = function(temp) {
  let tempC = ((temp - 32) * 5) / 9
  return Math.round((tempC + Number.EPSILON) * 10) / 10
};

const ctof = function(temp) {
  let tempF = (temp * 9)/5 + 32
  return Math.round((tempF + Number.EPSILON) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
