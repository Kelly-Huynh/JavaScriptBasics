const fizzBuzz = require('./fizzBuzz.js');

const fizzbuzzUntil = (endnum) => {
    for (let number = 1; number <= endnum; number++) {
        console.log(fizzBuzz(number));
    }
}

fizzbuzzUntil(10)