const countCharacters = require('../countCharacters');

describe('countCharacters', () => {
    test('sparrow', () => {
        expect(countCharacters('sparrow')).toEqual({ s: 1, p: 1, a: 1, r: 2, o: 1, w: 1 });
    })
    test('‘aabcddeffge’', () => {
        expect(countCharacters('aabcddeffge')).toEqual({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1});
    })
    test('a 2ab !d', () => {
        expect(countCharacters('a 2ab !d')).toEqual({ '2': 1, a: 2, b: 1, d: 1 });
    })
    test('not string', () => {
        expect(countCharacters(23456)).toBe(false);
    })
    test('', () => {
        expect(countCharacters('')).toBe(false);
    })
    test('null', () => {
        expect(countCharacters(null)).toBe(false);
    })
})