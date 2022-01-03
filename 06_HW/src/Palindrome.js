function reverse(nums) {
    let reverse = '';
    for(let i = String(nums).length - 1; i >= 0; i--){
        reverse = reverse + String(nums)[i];
    }
    return reverse;
}

function Palindrome(num) {
    if(typeof num !== 'number')
        return false;
    if(num < 10){
        return 11;
    }
    for(let i = num + 1; i++;) {
        if(String(i) === reverse(i)){
            return i;
        }
    }

}
console.log(Palindrome(7));
console.log(Palindrome(99));
console.log(Palindrome(132));
console.log(Palindrome(888));
console.log(Palindrome(999));
console.log(Palindrome('sdkfmga'));
console.log(Palindrome(0));
console.log(Palindrome(-1));

module.exports = Palindrome;