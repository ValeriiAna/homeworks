
// Task 1. find min element in array
function getMinElemArr(arr){
    let minValue = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}
console.log(getMinElemArr([5,45,66,7,-4,0]))


// Task 2. find max element in array
function getMaxElemArr(arr) {
    let maxValue = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];

        }
    }
    return maxValue;
}
console.log(getMaxElemArr([5,45,66,7,-4,0]))

// Task 3. find index of min element in array
function getIndexOfMin(arr) {
    let indexOfMin = 0;
    let minValue = arr[0];
    for(let i=0; i < arr.length; i++) {
        if(arr[i] < minValue) {
            indexOfMin = i;
            minValue = arr[i];
        }
    }
    return indexOfMin;
}
console.log(getIndexOfMin([5,45,66,7,-4,0]))

// Task 4. find index of max element in array
function getIndexOfMax(arr) {
    let indexOfMax = 0;
    let maxValue = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            indexOfMax = i;
            maxValue = arr[i];
        }
    }
    return indexOfMax;
}
console.log(getIndexOfMax([5,45,66,7,-4,0]))

//Task 5. count all elems with oddIndexes in array
function sumOfElemsOddIndex(arr) {
    let sum = 0;
    for(let i = 1; i < arr.length; i += 2) {
        if(i % 2 !== 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(sumOfElemsOddIndex([1,2,3,4,5]))

// Task 6. Revers of array
function reversArray(arr) {
    let result = [];
    let currentIndex = arr.length - 1;
    for(let i = 0; i <= (arr.length - 1); currentIndex--, i++) {
        result[i] = arr[currentIndex];
    }
    return result;
}
console.log(reversArray([5,45,66,7,-4,0]))

// Task 7. count odd elems in array
function countOddElems(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count ++;
        }
    }
        return count;
}
    console.log(countOddElems([1,2,3,5,7]));

// Task 8. replace half of elems in array [1,2,3,4]
function fSwap(arr) {
    let temp;
    if (arr.length % 2 === 0) {
        let half = arr.length / 2;
        for (let i = 0; i < arr.length / 2; i++) {
            temp = arr[half];
            arr[half] = arr[i];
            arr[i] = temp;
            half++;
        }
        return arr;
    }
}
        //console.log(fSwap([1, 2, 3, 4]))

// Task 9. Отсоритровать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 7, 111, 0]))

function Select(arr) {
    for (let i = 0, k = arr.length - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}

console.log(Select([80, 4, 16, 6]))

function Insert(arr) {
    let i, j, temp;
    for (i = 1; i < arr.length; i++) {
        temp = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] < temp)
                break;

            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr
}

console.log(Insert([5, 7, 12, 9]))


exports.getMinElemArr = getMinElemArr;
exports.getMaxElemArr = getMaxElemArr;
exports.getIndexOfMin = getIndexOfMin;
exports.getIndexOfMax = getIndexOfMax;
exports.sumOfElemsOddIndex = sumOfElemsOddIndex;
exports.reversArray = reversArray;
exports.countOddElems = countOddElems;
exports.fSwap = fSwap;
exports.bubbleSort = bubbleSort;
exports.Select = Select;
exports.Insert = Insert;
