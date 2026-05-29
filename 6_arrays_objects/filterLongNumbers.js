const checkLength = require('./checkLength.js');


const filterLongNumbers = (numbers) => {
    return numbers.filter(checkLength);
}

module.exports = filterLongNumbers;