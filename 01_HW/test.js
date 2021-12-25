const assert = require('assert');
const path = require('path');
const Block_1 = require(path.join(__dirname, 'Block_1.js'));
const Block_2 = require(path.join(__dirname, 'Block_2.js'));
const Block_3 = require(path.join(__dirname, 'Block_3.js'));
const Block_4 = require(path.join(__dirname, 'Block_4.js'));


describe( 'Block 1 test', function (){
    it('If "a" even returns a * b else returns a + b', function () {
        assert.equal(Block_1.isEven(7, 4), 11);
        assert.equal(Block_1.isEven(4, 4), 16);

    })

it('returns quarter of params "x" ans "y" ', function () {
        assert.equal(Block_1.FindQuarter(7, 4), "1");
        assert.equal(Block_1.FindQuarter(-8, 4), "2");
        assert.equal(Block_1.FindQuarter(-9, 0), "3 & 2");
        assert.equal(Block_1.FindQuarter(88, 0), "1 & 4");
        assert.equal(Block_1.FindQuarter(-3, -5), "3");
        assert.equal(Block_1.FindQuarter(-10, -6), "3");
        assert.equal(Block_1.FindQuarter(30, 15), "1");
        assert.equal(Block_1.FindQuarter(6, -9), "4");
        assert.equal(Block_1.FindQuarter(0, 24), "1 & 2");
        assert.equal(Block_1.FindQuarter(0, -1), "3 & 4");

})

it('returns sum of positive elements', function () {
        assert.equal(Block_1.SumOfPositiveElems(1,4, 5), "10");
        assert.equal(Block_1.SumOfPositiveElems(1,-7, 44 ), "45");
        assert.equal(Block_1.SumOfPositiveElems(-5, -10, -2), NaN);
        assert.equal(Block_1.SumOfPositiveElems(-5, -10, 2), "2");
        assert.equal(Block_1.SumOfPositiveElems(-5, 10, -2), "10");
        assert.equal(Block_1.SumOfPositiveElems(5, -10, -2), "5");
})

it('if sum > multiply returns "sum + 3" else returns "multiply + 3', function () {
        assert.equal(Block_1.CalculateMax(1, 1, 1), "6");
        assert.equal(Block_1.CalculateMax(2,5,5), "53");
        assert.equal(Block_1.CalculateMax(3,5,1 ), "18");
})

it('returns mark of student according to rating', function () {
        assert.equal(Block_1.FindStudentMark(21), "E");
        assert.equal(Block_1.FindStudentMark(74), "C");
        assert.equal(Block_1.FindStudentMark(94), "A");
        assert.equal(Block_1.FindStudentMark(82), "B");
        assert.equal(Block_1.FindStudentMark(40), "D");
        assert.equal(Block_1.FindStudentMark(10), "F");
})
})


describe( 'Block 2 test', function () {
        it('returns min element of array', function () {
                assert.equal(Block_2.getMinElemArr([5,45,66,7,-4,0]), -4);
        })


it('returns max element of array', function () {
        assert.equal(Block_2.getMaxElemArr([5,45,66,7,-4,0]), 66);
})

it('returns index of min element in array', function () {
        assert.equal(Block_2.getIndexOfMin([5,45,66,7,-4,0]), 4);
})

it('returns index of max element in array', function () {
        assert.equal(Block_2.getIndexOfMax([5,45,66,7,-4,0]), 2);
})

it('returns count off all elems with oddIndexes in array', function () {
        assert.equal(Block_2.sumOfElemsOddIndex([1,2,3,4,5]), 6);
})

it('returns reversed array', function () {
        assert.deepEqual(Block_2.reversArray([5,45,66,7,-4,0]), [0, -4, 7, 66, 45, 5]);
})

it('returns sum of odd elems in array', function () {
        assert.equal(Block_2.countOddElems([1,2,3,5,7]), 4);
})

it('returns replaced half of elems in array', function () {
        assert.deepEqual(Block_2.fSwap([1,2,3,4]),[3,4,1,2]);
})

it('returns sorted array', function () {
        assert.deepEqual(Block_2.bubbleSort([4,7,111,0]),[0, 4, 7, 111]);
})

it('returns sorted array', function () {
        assert.deepEqual(Block_2.Select([80,4,16,6]),[4, 6, 16, 80]);
})

it('returns sorted array', function () {
        assert.deepEqual(Block_2.Insert([5,7,12,9]),[5, 7, 9, 12]);
})
})

describe( 'Block 3 test', function () {
        it('returns sum and of even numbers from 1 to 99', function () {
                assert.equal(Block_3.sumOfElems(), "2450");
        })


        it('returns sum quantity of even numbers from 1 to 99', function () {
                assert.equal(Block_3.countOfElems(), "49");
        })

        it('returns "true" if number is simple, else "false"', function () {
                assert.equal(Block_3.isSimpleNum(24), false);
                assert.equal(Block_3.isSimpleNum(55), true);
        })

        it('returns root for number', function () {
                assert.equal(Block_3.FindSqrt(81), "9");
                assert.equal(Block_3.BinSearchSqrt(9), "3");
        })

        it('returns factorial', function () {
                assert.equal(Block_3.getFactorial(12), "479001600");
        })

        it('returns sum of digits of a given number', function () {
                assert.equal(Block_3.getSumOfNumInNumber(555), "15");
        })

        it('returns reversed number', function () {
                assert.equal(Block_3.reversNum(123), 321);
        })
})

describe( 'Block 4 test', function () {
        it('returns string value for day of the week', function () {
                assert.equal(Block_4.getDayOfWeek(1), "Понедельник");
                assert.equal(Block_4.getDayOfWeek(2), "Вторник");
                assert.equal(Block_4.getDayOfWeek(3), "Среда");
                assert.equal(Block_4.getDayOfWeek(4), "Четверг");
                assert.equal(Block_4.getDayOfWeek(5), "Пятница");
                assert.equal(Block_4.getDayOfWeek(6), "Суббота");
                assert.equal(Block_4.getDayOfWeek(7), "Воскресенье");

        })


it('returns string kind for number', function () {
        assert.equal()
})

it('returns number kind for string', function () {
        assert.equal(Block_4.getNumberView('nine hundred twenty one'), 921);
})

it('returns distance between 2 points', function () {
        assert.equal(Block_4.getDistance(1, 4, 5, 8), 6);
})
})