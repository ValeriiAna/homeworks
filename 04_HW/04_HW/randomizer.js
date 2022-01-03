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
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
const result = document.getElementById('result');

function func1() {
    result.innerText = random();

}


let generate = document.getElementById('generate');
const resultNumber = [];
let resultCount = 1;
if(resultNumber.length === toInput - 1) {
    generate.disabled = true;
    result.textContent = 'The numbers for generate are over'
}

function reset() {
    generate.disabled = false;
    fromInput.value = ' ';
    toInput.value = ' ';
    resultNumber.length = 0;
}
