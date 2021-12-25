// Task 1 - Найти сумму четных чисел и их количество в диапазоне от 1 до 99

    function sumOfElems() {
        let sum = 0;
        for (let i = 1; i <= 99; i++) {
            if (i % 2 === 0) {
                sum = sum + i;
            }
        }
        return sum
    }
    console.log(sumOfElems())

    function countOfElems() {
        let quantity = 0;
        for (let i = 1; i <= 99; i++) {
            if (i % 2 === 0) {
                quantity++
            }
        }
        return quantity
    }
    console.log(countOfElems())

//Task 2 - Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
let i = 0;
function isSimpleNum(i) {
    if (i % i === 0 && i % 1 === 0 && i % 2 === 1) {
        return true
    } else {
        return false
    }
}
console.log(isSimpleNum(24))

// Task 3 - Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function FindSqrt(num) {
    let i = 1;
    while(i * i <= num){
        i++;
    }
    return i - 1 ;
}
console.log(FindSqrt(81))

function BinSearchSqrt(num){
    let result = num;
    while(result * result > num){
        result /=2;
        while(result * result < num){
            result++;
        }
    }
    return result;
}
console.log(BinSearchSqrt(9))

//Task 4 - Вычислить факториал числа n. n! = 1*2*…*n-1*n
function getFactorial(num){
    let result = 1;
    if(num > 1){
        for(let i = 2; i <= num; i++){
            result *= i;
        }
    }
    return result;
}
console.log(getFactorial(12))

//Task 5 - Посчитать сумму цифр заданного числа
function  getSumOfNumInNumber(number) {
    let str = number.toString(); //
    let arr = str.split(''); //
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + Number.parseInt(arr[i]);
    }
    return sum;
}

console.log(getSumOfNumInNumber(555));

//Task 6 - Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function reversNum(n) {
    let number = '';
    let position = 0;
    while (n !== 0) {
        position = n % 10;
        n = (n - position) / 10;
        number = number + position;
    }
    return number;
}

 console.log(reversNum(123))

exports.sumOfElems = sumOfElems;
exports.countOfElems = countOfElems;
exports.isSimpleNum = isSimpleNum;
exports.FindSqrt = FindSqrt;
exports.BinSearchSqrt = BinSearchSqrt;
exports.getFactorial = getFactorial;
exports.getSumOfNumInNumber = getSumOfNumInNumber;
exports.reversNum = reversNum;

