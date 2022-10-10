// const leapYears = function(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// };

const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            return true
        } else if (year % 100 === 0) {
            return false
        }
    } else {
        return false
    }
    return true
};

// Do not edit below this line
module.exports = leapYears;
