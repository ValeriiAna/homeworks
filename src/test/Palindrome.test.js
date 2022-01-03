const Palindrome = require('../Palindrome');

describe('Palindrome', () => {
    test('7', () => {
        expect(Palindrome(7)).toBe(11);
    })
    test('99', () => {
        expect(Palindrome(99)).toBe(101);
    })
    test('132', () => {
        expect(Palindrome(132)).toBe(141);
    })
    test('888', () => {
        expect(Palindrome(888)).toBe(898);
    })
    test('999', () => {
        expect(Palindrome(999)).toBe(1001);
    })
    test('esfjkdg', () => {
        expect(Palindrome('sdsfdg')).toBe(false);
    })
    test('0', () => {
        expect(Palindrome(0)).toBe(11);
    })
    test('-1', () => {
        expect(Palindrome(-1)).toBe(11);
    })
})