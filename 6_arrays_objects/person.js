const person = {
    name:  'Maxine',
    age: 32,
    address: {
        city: 'London',
        postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.address.city);
// OR 
console.log(person['address']['city']);

console.log(person['hobbies'][1]);

module.exports = person;