const addToBatch = (array, aNumber) => {
    if (array.length >= 5){
        return array;
    } 

    return array.concat(aNumber);
}

module.exports = addToBatch;