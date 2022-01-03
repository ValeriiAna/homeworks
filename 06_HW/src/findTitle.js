function findTitle(arr, str) {
    if(!Array.isArray(arr))
        return false;
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let keys in arr[i]){
            if(keys === 'title') {
                if(arr[i][keys].toLowerCase().includes(str)){
                    result.push(arr[i]);

                    break;
                }

            }
        }

    }  if (result.length === 0) {
        return 'not search string'
    }
        return result;
}

arr = [{
    title: 'Some title 1'
} , {
    title: 'I like JS'
} , {
    user: 'This object doesnt have key title js '
} , {
    title: 'Js - is the best!'
}];

// arr = [{
//     title: 'Some title 1'
// } , {
//     title: 'I like '
// } , {
//     user: 'This object doesnt have key title js'
// } , {
//     title: ' - is the best!'
// }];



console.log(findTitle(arr, 'my'));

module.exports = findTitle;