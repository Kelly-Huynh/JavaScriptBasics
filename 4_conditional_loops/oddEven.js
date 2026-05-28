const oddEven = (number) => {
        if (number % 2 === 0) {
            return 'even';
        } else {
            return 'odd'; 
        }
    }

for (let number = 0; number <= 20 ; number++) {
    const isoddEven = oddEven(number);
    console.log(`${number} is ${isoddEven}`)
}
