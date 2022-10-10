const sumAll = function(...arr) {
    let sum = 0
    if (arr[0] < 0 || arr[1] < 0) {
        return "ERROR"
    }
    if (Number.isInteger(arr[0]) && Number.isInteger(arr[1])) {
        if (arr[0] > arr[1]) {
            arr.sort((a, b) => a - b)
        }
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i
        }
        return sum
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
