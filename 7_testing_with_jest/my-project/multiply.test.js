const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplies 2 and 3 and returns 6', () => {
        expect(multiply(2, 3)).toEqual(6);
    });
});