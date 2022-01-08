const tickets = require('../tickets');

describe('tickets', () => {
    test('[25, 25, 50]', () => {
        expect(tickets([25, 25, 50])).toEqual('YES');
    })
    test('[25, 100]', () => {
        expect(tickets([25, 100])).toEqual('NO');
    })
    test('[25, 25, 50, 100]', () => {
        expect(tickets([25, 25, 50, 100])).toEqual('YES');
    })
    test('[25, 50, 100]', () => {
        expect(tickets([25, 50, 100])).toEqual('NO');
    })
    test('empty arr', () => {
        expect(tickets([])).toEqual(false);
    })
    test('["25" , "50", "100"]', () => {
        expect(tickets(['25', '50', '100'])).toEqual('NO');
    })
    test('["25", "25", "50", "100"]', () => {
        expect(tickets(['25', '25', '50', '100'])).toEqual('YES');
    })
})