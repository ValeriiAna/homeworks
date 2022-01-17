// Task 1 - Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
// getDays( 2021 , 4) //30
// getDays( 2021 , ‘April’) //30

function getDays (year, month) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        if (typeof month === 'string') {
            month = monthNames.indexOf(month) + 1;
        }
        if (month < 1 || month > 12 || month === null) {
            return false;
        }
        if (year < 1 || year === null) {
            return false;
        }
        return new Date(year, month, 0).getDate();
    }

    console.log(getDays(2020, 2))


module.exports = getDays;


