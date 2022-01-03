const findTitle = require('../findTitle');

describe('findTitle', () => {
    test('[ { title: I like JS }, { title: Js - is the best! }]', () => {
        expect(findTitle(arr, 'js')).toEqual([{"title": "I like JS"}, {"title": "Js - is the best!"}]);
    })
    test('isArray', () => {
        expect(findTitle(234567, 'js')).toEqual(false);
    })
    test('not search str', () => {
        expect(findTitle(arr,'my')).toEqual('not search string');
    })

})