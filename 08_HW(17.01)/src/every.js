// Task - 3 Написать функцию every, которая будет принимать первым аргументом массив,
// а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false).
// Результатом функции должно быть логическое выражение true/false в зависимости от того,
// выполняется ли условие для каждого из элементов.


function every(arr, callback) {
    if(!Array.isArray(arr)){
        return false;
    }
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

let result = every([8,4,3], function(num) {
    return num % 2 === 0;
});

console.log(result)


module.exports = every;
