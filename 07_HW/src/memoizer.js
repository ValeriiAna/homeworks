function memoizer(){
    let cache = {}
    return (n) => {
        if (cache[n] != undefined) {
            console.log(`<= Fetching: "${n}" from cache`)
            return cache[n]
        } else {
            console.log(`=> Write: "${n}" in cache`)
            let result = memoizer(n)
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

console.log('myFunc:', myFunc(10))
console.log('myFunc:', myFunc(10))
console.log('myFunc:', myFunc(6))

console.log('\n')


const myFuncMem = memoizer(myFunc)

console.log('myFuncMem:', myFuncMem(12))
console.log('myFuncMem:', myFuncMem(14))
console.log('myFuncMem:', myFuncMem(12))

console.log('\n')

console.log('myFuncMem:', myFuncMem(11))
console.log('myFuncMem:', myFuncMem(16))
console.log('myFuncMem:', myFuncMem(16))



module.exports = memoizer;
module.exports = myFunc;
module.exports = myFuncMem;