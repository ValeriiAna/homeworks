const memoizer = require('../memoizer');
const myFunc = require('../memoizer');

describe('myFunc', () => {
    test('x*x', () => {
        expect(myFunc(10)).toEqual(100);
    })
})

// describe('memoizer', () => {
//     test('Write: "12" in cache, "12"', () => {
//         expect(memoizer())
//     })
// })