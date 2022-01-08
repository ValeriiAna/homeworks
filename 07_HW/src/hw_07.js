// Task - 1
function tickets() {
    let price = [25, 100];
    let change = {
        25: 0,
        50: 0,
        100: 0,
    }

    for (let i = 0; i < price.length; i++) {
        const bill = price[i];
        if(bill === 25){
            change[bill]++;
        } else if (bill === 50) {
            if (change[25] > 0) {
                change[25]--;
            } else return 'NO';
        }
        if (bill === 100) {
            if (bill === 100) {
                if (change[50] > 0 && change[25] > 0) {
                    change[50]--;
                    change[25]--;
                } else if (change[25] >= 3) {
                    change[25] -= 3;
                } else return 'NO';
            }
            change[bill]++;
        }
        return 'YES';
    }
}

    console.log(tickets())


// price[i] === 25 ? change += 25
//     || price[i] === 50 ? change += 50 : change -= price[i] - 25
//     || price[i] === 100 ? change += 100 : change -= price[i] - 75

//tickets([25, 25, 50]); // => YES
// tickets([25, 100]); // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 100]); // Yes
// tickets([25, 50, 100]); // No
// tickets([‘25’, ‘25’, ‘50’, ‘100’]); // Yes
// tickets([‘25’, ‘50’, ‘100’]); // No

// Task - 2  Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух чисел в виде строки. Математическая работа с этими двумя числами недоступна. Не используйте BigInt.
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


const x = '111111111111111111111111111111111111111111111111111'
const y = '23333333333333333333333333333333333333333333333333'

const arr1 = x.split('');
const newArr1 = arr1.map(Number) // создаем массив с типом Number


const arr2 = y.split('');
const  newArr2 = arr2.map(Number)

const sum =  newArr2.map(function (newArr2, i) { // к каждому элементу массива newArr2 применяем функцию коллбэк
    return newArr2 + newArr1[i];

});

console.log(sum.join('')); //  объединяет все элементы массива

//getSum(‘123’, ‘324’) -> ‘447’ getSum(‘111111111111111111111111111111111111111111111111111’,
// ’23333333333333333333333333333333333333333333333333’) -> ‘3444444.......4444444’

// Task - 3
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

function findMessage(arr, name){
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

console.log(findMessage(listOfPosts2, 'Rimus'))

// Task - 4
const memoizer = (func) => {
    let cache = {}
    return (n) => {
        if (cache[n] != undefined) {
            console.log(`<= Fetching: "${n}" from cache`)
            return cache[n]
        } else {
            console.log(`=> Write: "${n}" in cache`)
            let result = func(n)
            cache[n] = result
            return result
        }
    }
}


let myFunc = (x) => {
    const n =  x * x;
    return n;
    // console.log(z)
}
console.log(myFunc(10,10))

console.log('myFunc:', myFunc(10,2))
console.log('myFunc:', myFunc(10,4))
console.log('myFunc:', myFunc(6,6))

console.log('\n')

const myFuncMem = memoizer(myFunc)

console.log('myFuncMem:', myFuncMem(12))
console.log('myFuncMem:', myFuncMem(14))
console.log('myFuncMem:', myFuncMem(12))

console.log('\n')

console.log('myFuncMem:', myFuncMem(11))
console.log('myFuncMem:', myFuncMem(16))
console.log('myFuncMem:', myFuncMem(16))



