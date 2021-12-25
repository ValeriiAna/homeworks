const yourMinNumber = document.getElementById("yourMinNumber");
yourMinNumber.setAttribute('value', '1');
yourMinNumber.addEventListener('change', (e) => {
    yourMinNumber.value = e.target.value;
    console.log(yourMinNumber.value);
});

const yourMaxNumber = document.getElementById("yourMaxNumber");
yourMaxNumber.setAttribute('value', '200');
yourMaxNumber.addEventListener('change', (e) => {
    yourMaxNumber.value = e.target.value;
    console.log(yourMaxNumber.value);
});


const attempts = document.getElementById("attempts");
attempts.setAttribute('value', '15');
attempts.addEventListener('change', (e) => {
    attempts.value = e.target.value;
    console.log(attempts.value);
});


save.addEventListener('click', random);


let result
let attemptsTwo
function random(min,max) {
    let out = document.getElementById('out');
    if(max > 200){
        out.innerHTML = 'Ваше число больше заданного диапозона, введите число меньше 200'
    }
    if (min < 1){
        out.innerHTML = 'Введите положительное число'
    }
    attemptsTwo = attempts.value // количество попыток, которые выберет пользователь
    console.log(attemptsTwo)
    min = Number(yourMinNumber.value);
    max = Number(yourMaxNumber.value);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(result);
    console.log(attemptsTwo);
}


document.getElementById('Generate').addEventListener('click', generate);

function generate() {

    --attemptsTwo;

    const myNum = +document.getElementById('myVariant').value;
    let out = document.getElementById('out');

    if (myNum > result) {
        out.innerHTML = `Холодно...ваше число больше загаданного. Осталось ${attemptsTwo} попытки!`;

    } else if (myNum < result) {
        out.innerHTML = `Теплее...ваше число меньше загаданного. Осталось ${attemptsTwo} попытки`;

    } else if (myNum === result) {
        out.innerHTML = `Поздравляю! Вы угадали число за ${attemptsTwo} попыток!`;

    }  if(attemptsTwo === 0){
        out.innerHTML = 'К сожалению, все ваши попытки были использованы...'
        document.getElementById('Generate').remove()
    }

    console.log(attemptsTwo)
}
