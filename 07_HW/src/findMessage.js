let  listOfPosts2 = [
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
]

function findMessage(listOfPosts2, name){
    if(!Array.isArray(listOfPosts2))
        return false;
    let post = 0;
    let comment = 0;
    for (let key in listOfPosts2){
        if (listOfPosts2[key].author === name){
            post = post + 1
        }
    }

    for (let key in listOfPosts2){
        if(listOfPosts2.includes(name)){
            comment = comment + 1
        }
        let a = listOfPosts2[key].comments;
        for (let key in a){
            if (a[key].author === name){
                comment = comment + 1

            }
        }
    }
    return {post, comment}
}

console.log(findMessage(listOfPosts2, 'Mark'))
console.log(findMessage(listOfPosts2, 'Rimus'))
console.log(findMessage('sdjnfdjgn', 'Mark'))
console.log(findMessage(listOfPosts2, 'Uncle'))

module.exports = findMessage;