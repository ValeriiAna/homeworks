const findMessage = require('../findMessage');

describe('findMessage', () => {
    test('arr, Rimus', () => {
        expect(findMessage([
            {
                id: 1,
                post: 'some post1',
                title: 'title 1',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    }
                ]
            },
            {
                id: 2,
                post: 'some post2',
                title: 'title 2',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    },
                    {
                        id: 1.3,
                        comment: 'some comment3',
                        title: 'title 3',
                        author: 'Rimus'
                    }
                ]
            },
            {
                id: 3,
                post: 'some post3',
                title: 'title 3',
                author: 'Rimus'
            },
            {
                id: 4,
                post: 'some post4',
                title: 'title 4',
                author: 'Uncle'
            }
        ], 'Rimus')).toEqual({ post: 1, comment: 3 });
    })
    test('isArr', () => {
        expect(findMessage(234567, 'Rimus')).toEqual(false);
    })
    test('arr, Mark', () => {
        expect(findMessage([
            {
                id: 1,
                post: 'some post1',
                title: 'title 1',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    }
                ]
            },
            {
                id: 2,
                post: 'some post2',
                title: 'title 2',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    },
                    {
                        id: 1.3,
                        comment: 'some comment3',
                        title: 'title 3',
                        author: 'Rimus'
                    }
                ]
            },
            {
                id: 3,
                post: 'some post3',
                title: 'title 3',
                author: 'Rimus'
            },
            {
                id: 4,
                post: 'some post4',
                title: 'title 4',
                author: 'Uncle'
            }
        ], 'Mark')).toEqual({ post: 0, comment: 0 });
    })
    test('Uncle', () => {
        expect(findMessage([
            {
                id: 1,
                post: 'some post1',
                title: 'title 1',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    }
                ]
            },
            {
                id: 2,
                post: 'some post2',
                title: 'title 2',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    },
                    {
                        id: 1.3,
                        comment: 'some comment3',
                        title: 'title 3',
                        author: 'Rimus'
                    }
                ]
            },
            {
                id: 3,
                post: 'some post3',
                title: 'title 3',
                author: 'Rimus'
            },
            {
                id: 4,
                post: 'some post4',
                title: 'title 4',
                author: 'Uncle'
            }
        ], 'Uncle')).toEqual({ post: 1, comment: 2 });
    })
})