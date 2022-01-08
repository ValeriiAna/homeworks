const getSum = require('../getSum');
const getSum2 = require('../getSum');

describe('getSum', () => {
    test('(‘123’, ‘324’)', () => {
        expect(getSum()).toEqual(447);
    })
})

describe('getSum2', () => {
    test('x+y', () => {
        expect(getSum2('111111111111111111111111111111111111111111111111111', '23333333333333333333333333333333333333333333333333')).toEqual(34444444444444444444444444444444444444444444444444);
    })
})