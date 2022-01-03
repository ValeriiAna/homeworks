const getCooingTime = require('../getCooingTime');

describe('getCooingTime', () => {
    test('eggsAmount >= 1 && eggsAmount <= 5' , () => {
       expect(getCooingTime(1)).toEqual(5);
    })
    test('eggsAmount > 5 && eggsAmount <= 10', () => {
        expect(getCooingTime(8)).toEqual(10);
    })
    test('eggsAmount > 5 && eggsAmount <= 10', () => {
        expect(getCooingTime(10)).toEqual(10);
    })
    test('eggsAmount < 1', () => {
        expect(getCooingTime(0)).toEqual(0);
    })
    test('eggsAmount > 10', () => {
        expect(getCooingTime(12)).toEqual('Not possible');
    })
    test('eggsAmount > 10', () => {
        expect(getCooingTime(20)).toEqual('Not possible');
    })
})