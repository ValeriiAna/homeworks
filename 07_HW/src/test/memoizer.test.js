const memoizer = require('../memoizer');


describe('memoizer', () => {
    test('Write: "12" in cache, "12"', () => {
        expect(memoizer(12)).toBe(144)
    })
})
