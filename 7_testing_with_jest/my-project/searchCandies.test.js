const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('takes a search string Ma and maximum price of 10 and returns only the names of candies matching the criteria', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
})

describe('searchCandies', () => {
    it('takes a search string Ma and maximum price of 2 and returns only the names of candies matching the criteria', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    })
})

describe('searchCandies', () => {
    it('takes a search string S and maximum price of 10 and returns only the names of candies matching the criteria', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties','Skittles', 'Starburst' ])
    })
})

describe('searchCandies', () => {
    it('takes a search string S and maximum price of 4 and returns only the names of candies matching the criteria', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties','Skittles'])
    })
})

describe('searchCandies', () => {
    it('takes a search string and maximum price and returns only the names of candies matching the criteria', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
    })
})