function countCharacters(str) {
    if(typeof str !== 'string' || str === '' || str === null)
        return false;

    let result = {};
    let string;
    string = str.toLowerCase().replace(/[^a-zа-я0-9]+/g, '');
    for(let char of string) {
        result[char] = result[char] + 1 || 1;

    } return result;

}
console.log(countCharacters('sparrow'));
console.log(countCharacters('aabcddeffge'));
console.log(countCharacters('a 2ab !d'));
console.log(countCharacters(2345678));
console.log(countCharacters(''));
console.log(countCharacters(null));

module.exports = countCharacters;