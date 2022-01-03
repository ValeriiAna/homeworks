function getNumberEven(arr) {
    if(!Array.isArray(arr))
    return false;
    let result;
    for (let i = 0; i < arr.length; i++) {
        result = arr.filter(element => element % 2 === 0);



    }
    return result;
}
console.log(getNumberEven([1,5,7,9,-15,2]));

module.exports = getNumberEven;