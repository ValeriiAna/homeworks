function getNumberOdd(arr) {
    if(!Array.isArray(arr))
        return false;
    let result;
    for(let i = 0; i < arr.length; i++){
        result = (arr.filter(element => element % 2 !== 0));
    }
    return result;

}

console.log(getNumberOdd([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));

module.exports = getNumberOdd;