// Task 1 - Получить строковое название дня недели по номеру дня

function getDayOfWeek(a) {
   let response;
    switch (a) {
        case 1:
            response = "Понедельник";
            break;
        case 2:
            response = "Вторник";
            break;
        case 3:
            response = "Среда";
            break;
        case 4:
            response = "Четверг";
            break;
        case 5:
            response = "Пятница";
            break;
        case 6:
            response = "Суббота";
            break;
        case 7:
            response = "Воскресенье";
            break;

    }
    return response
}
console.log(getDayOfWeek(6))

// Task 2 - Вводим число(0-999), получаем строку с прописью числа.
function getStringView(number) {
    let num = number.toString();
    let result = [];
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const fDozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = [units] + ['hundred'];
    const rest = ['thousand', 'million', 'billion'];
    if (num >= 0 && num < 10) {
        result = units[num];
    } else if (num >= 10 && num < 20) {
        result = fDozens[num - 10];
    } else if (num >= 20 && num < 100) {
        if (num % 10 === 0) {
            result = dozens[(num / 10) - 2];
        } else {
            result = dozens[((num - num % 10) / 10) - 2] + '' + units[num % 10];
        }
    } else if (num >= 100 && num < 1000) {
        if (num % 100 === 0) {
            result = hundreds[(num / 100) - 1];
        } else if (num.toString()[1] == 0) {
            result = hundreds[(((num - num % 100) / 100)) - 1] + '' + units[num % 100];
        } else if (num.toString()[1] == 1) {
            result = hundreds[(((num - num % 100) / 100)) - 1] + '' + fDozens[num % 100 - 1];
        } else {
            if (num % 10 === 0) {
                result = hundreds[(((num - num % 100) / 100)) - 1] + '' + dozens[((num % 100) / 10) - 2];
            } else {
                result = hundreds[(((num - num % 100) / 100)) - 1] + '' + dozens[((((num % 100) - ((num % 100) % 10)) / 10)) - 2] + '' + units[num % 100];

            }
        }
    }
}

// Task 3
function getNumberView(stringNum) {
    let digits = ['', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ties = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['hundred'];
    let scales = ['thousand', 'million', 'billion'];

    stringNum = stringNum.replaceAll('-', ' ');
    let arr = stringNum.split(' ');
    let res = 0;
    let res1 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(digits.includes(arr[i])) {
            res1 = res1 + digits.indexOf(arr[i]);
        } else if(ties.includes(arr[i])) {
            res1 = res1 + ties.indexOf(arr[i]) * 10;
        } else if(arr[i] === 'hundred') {
            res1 = res1 * 100;
        } else if(scales.hasOwnProperty(arr[i])) {
            res1 = res1 * scales[arr[i]];
            res = res + res1;
            res1 = 0;
        }
    }
    if(res1 !== 0) {
        res = res + res1;
    }
    return res
}
console.log(getNumberView('nine hundred twenty one'))

// Task 4
function getDistance(x1, y1, x2, y2) {
    return Math.round(Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))));
}
 console.log(getDistance(1, 4, 5, 8))


exports.getDayOfWeek = getDayOfWeek;
exports.getStringView = getStringView;
exports.getNumberView = getNumberView;
exports.getDistance = getDistance;


