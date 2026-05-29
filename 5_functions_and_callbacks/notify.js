const notifyByEmail = require('./notifyByEmail.js');
const notifyByText = require('./notifyByText.js');

const notify = (input, theFunction) => {
    return theFunction(input);
}

console.log(notify("hello@makers.tech.test", notifyByEmail))
console.log(notify("+10000000000", notifyByText))