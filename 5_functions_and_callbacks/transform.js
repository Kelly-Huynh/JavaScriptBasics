const originalLog = console.log;
console.log = () => {};

const lowercaseMessage = require('./lowercaseMessage.js');

console.log = originalLog;

const transform = (string, aFunction) => {
    return aFunction(string);
}


console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage))