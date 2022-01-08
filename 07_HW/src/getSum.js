function getSum(){
    const a = '123'
    const b = '324'
    const c = Number(a);
    const d = Number(b);
    const arr1 = new Array(c);
    const arr2 = new Array(d);

    return arr1.concat(arr2).length
}
console.log( getSum());


function getSum2(x, y) {

    // const x = '111111111111111111111111111111111111111111111111111'
    // const y = '23333333333333333333333333333333333333333333333333'

    const arr1 = x.split('');
    const newArr1 = arr1.map(Number) // создаем массив с типом Number


    const arr2 = y.split('');
    const newArr2 = arr2.map(Number)

    const sum = newArr2.map(function (newArr2, i) { // к каждому элементу массива newArr2 применяем функцию коллбэк
        return newArr2 + newArr1[i];

    });
    return Number(sum.join(''));
}

console.log(getSum2('111111111111111111111111111111111111111111111111111','23333333333333333333333333333333333333333333333333'))

// console.log(sum.join('')); //  объединяет все элементы массива

//getSum(‘123’, ‘324’) -> ‘447’ getSum(‘111111111111111111111111111111111111111111111111111’,
// ’23333333333333333333333333333333333333333333333333’) -> ‘3444444.......4444444’

module.exports = getSum;
module.exports = getSum2;