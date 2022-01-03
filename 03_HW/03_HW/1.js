const yourMinNumber = document.getElementById("yourMinNumber");
yourMinNumber.setAttribute('value', '1');
yourMinNumber.addEventListener('change', (e) => {
    yourMinNumber.value = e.target.value;
});

const yourMaxNumber = document.getElementById("yourMaxNumber");
yourMaxNumber.setAttribute('value', '200');
yourMaxNumber.addEventListener('change', (e) => {
    yourMaxNumber.value = e.target.value;
});

const compNum =function random(min,max) {
    min = Number(yourMaxNumber.value);
    max = Number(yourMinNumber.value);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let attempts = 0;
function onClick() {
let attempt = document.getElementById('attempts');
attempts += attempt;
return attempts
}
console.log(onClick());


let guess = 5;
document.getElementById('Generate').addEventListener('click', generate);
function generate() {
    const myNum = document.getElementById('myVariant').value;

    let out = document.getElementById('out');

    if (myNum === compNum) {
out.innerHTML = `Поздравляю! Вы угадали число за ${guess} попыток!`
    } else if (guess === attempts) {
        out.innerHTML = `К сожалению, Вы не угадали. Игра завершина за ${guess} попыток!!!`;
    } else if (myNum > compNum) {
            out.innerHTML = `Холодно...ваше число больше загаданного. Осталось ${guess}`;
        } else if(myNum < compNum) {
            out.innerHTML = `Теплее...ваше число меньше загаданного. Осталось ${guess}`;
        }
    guess--;
    }





