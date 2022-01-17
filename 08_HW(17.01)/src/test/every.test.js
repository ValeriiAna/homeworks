const every = require('../every')

describe('every', () => {
    test('test', () => {
        expect(true).toBe(true);
    })
    test('should return true', () => {
        expect(every([8,4,2], function(num) {
            return num % 2 === 0;
        })).toBe(true);
    })
    test('should return false', () => {
        expect(every([8,3,2], function(num) {
            return num % 2 === 0;
        })).toBe(false);
    })
    test('should return false', () => {
        expect(every('this is not arr', function(num) {
            return num % 2 === 0;
        })).toBe(false);
    })
})