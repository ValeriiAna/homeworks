const fromInput = document.getElementById('from-input');
fromInput.setAttribute('value', ' ');
fromInput.addEventListener('change', (e) => {
    fromInput.value = e.target.value;
});

const toInput = document.getElementById('to-input');
toInput.setAttribute('value', ' ');
toInput.addEventListener('change', (e) => {
    toInput.value = e.target.value;
});


function random(min,max) {
    min = Number(fromInput.value);
    max = Number(toInput.value);
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

let resultNumbers = [];
let generateBtn = document.getElementById('generate');
const result = document.getElementById('result');

function func1() {
    const minValue = fromInput.value
    const maxValue = toInput.value

    if (resultNumbers.length === maxValue - 1) {
        generateBtn.disabled = true;
        return;
    }
    if (resultNumbers.includes(random())) {
        func1();
        return
    }
    result.innerText = random();
    resultNumbers.push(result);
}