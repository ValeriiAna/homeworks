// Task - 1
function getCooingTime(eggsAmount) {
    let result;
    const time = 5;

if(eggsAmount >= 1 && eggsAmount <= 5) {
    result = time;

} else if(eggsAmount > 5 && eggsAmount <= 10) {
    result = time*2;

} else if(eggsAmount < 1) {
    result = 0;
} else if(eggsAmount > 10){
    console.log('Not possible')

} return result;

}
console.log(getCooingTime(0));
console.log(getCooingTime(5));
console.log(getCooingTime(9));

// Task - 2

function getNumberEven(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        result = arr.find(element => element % 2 === 0);
    }
    return result;
}
console.log(getNumberEven([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));

function getNumberOdd(arr) {
    let result;
for(let i = 0; i < arr.length; i++){
        result = arr.find(element => element % 2 !== 0);
    }
    return result;
    }
console.log(getNumberOdd([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));


// Task - 3
function findTitle(arr, str) {
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

        }return result;
}
    arr = [{
        title: 'Some title 1'
    } , {
        title: 'I like JS'
    } , {
        user: 'This object doesnt have key title js'
    } , {
        title: 'Js - is the best!'
    }];

console.log(findTitle(arr, 'js'));


// Task - 4
function countCharacters(string) {
    let result = {};
   string = srting.toLowerCase().replace(/[^a-za-я0-9]+/g, /\s/g, '');
    for(let char of string) {
        result[char] = result[char] + 1 || 1;

    } return result;

}
console.log(countCharacters('sparrow'));
console.log(countCharacters('‘aabcddeffge’'));
console.log(countCharacters('a 2ab !d'));


// Task - 5

function reverse(nums) {
    let reverse = '';
    for(let i = String(nums).length - 1; i >= 0; i--){
        reverse = reverse + String(nums)[i];
    }
    return reverse;
}

function Palindrome(num) {
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