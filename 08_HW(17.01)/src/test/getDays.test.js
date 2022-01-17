const getDays = require('../getDays');

describe('getDays', () => {
    test('test', () => {
        expect(true).toBe(true);
    })
    test('return count of days in month', () => {
        expect(getDays(2020, 2)).toBe(29);
    })
    test('return count of days in month', () => {
        expect(getDays(2020, 'February')).toBe(29);
    })
    test('return count of days in month', () => {
        expect(getDays(2020, 67)).toBe(false);
    })
    test('return count of days in month', () => {
        expect(getDays(-2020, 2)).toBe(false);
    })
    test('return count of days in month', () => {
        expect(getDays(2020, 'month')).toBe(false);
    })
    test('return count of days in month', () => {
        expect(getDays(null, 'February')).toBe(false);
    })
    test('return count of days in month', () => {
        expect(getDays(2020, null)).toBe(false);
    })
})