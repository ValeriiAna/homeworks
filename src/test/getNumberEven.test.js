const getNumberEven = require('../getNumberEven');

describe('getNumberEven', () => {
    test('find 4', () => {
        expect(getNumberEven([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toEqual([4]);
    })
    test('find 2, 16', () => {
        expect(getNumberEven([1,5,7,9,-15,2,16])).toEqual([2,16]);
    })
    test('isArray', () => {
        expect(getNumberEven(23456)).toEqual(false);
    })
    test('not even Numbers', () => {
        expect(getNumberEven([1,5,7,9,-15,17,21])).toEqual([]);
    })
})