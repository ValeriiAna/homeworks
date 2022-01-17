const Number = require('../numberProto');

describe('getDays', () => {
    test('test', () => {
        expect(true).toBe(true);
    })
    test('return false if number is even, for odd numbers return true', () => {
        expect((8).isOdd()).toBe(false);
    })
    test('return false if number is even, for odd numbers return true', () => {
        expect((3).isOdd()).toBe(true);
    })
    test('return false if number is even, for odd numbers return true', () => {
        expect((0).isOdd()).toBe(false);
    })
    test('return false if number is even, for odd numbers return true', () => {
        expect((13).isOdd()).toBe(true);
    })
})