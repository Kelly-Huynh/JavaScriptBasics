const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true; 
    }
    return false;
};

module.exports = checkLength;

// console.log(checkLength('1763687364'))
// console.log(checkLength('AAAA#####AAAA#87@768767382672'))