const removeFromArray = function(array, ...args) {
    // filter the original array and filter out those elements that are in array args
    return array.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
