const {inputValueSetter, setHTMLValue, getInputValue, attemptsMinus} = require('./utils');

// let yourMinNumber = inputValueSetter("yourMinNumber", 1);
// let yourMaxNumber = inputValueSetter("yourMaxNumber", 200);
// let attempts = inputValueSetter("attempts", 15);

document.addEventListener('DOMContentLoaded', function(){
    init();
})

function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}


function generate(state) {
    let myNum = Number.parseInt(getInputValue('myVariant'), 10);

    attemptsMinus(state);

    // let out = document.getElementById('out');
    if (!addListener('Generate')){
        setHTMLValue('out', 'Вы не задали настройки игры');
    }
    if (myNum > state.result) {
        setHTMLValue('out',`Холодно...ваше число больше загаданного. Осталось ${state.inputAttempt} попытки!`);

    } else if (myNum < state.result) {
        setHTMLValue('out',`Теплее...ваше число меньше загаданного. Осталось ${state.inputAttempt} попытки`);

    } else if (myNum === state.result) {
        setHTMLValue('out', `Поздравляю! Вы угадали число за ${state.inputAttempt} попыток!`);

    }  if(state.inputAttempt === 0){
        setHTMLValue('out', 'К сожалению, все ваши попытки были использованы...');
        document.getElementById('Generate').remove()
    }

    console.log(state.inputAttempt);
}

function saveSettings(state) {
    let yourMinNumber = Number.parseInt(getInputValue('yourMinNumber'), 10);
    let yourMaxNumber = Number.parseInt(getInputValue('yourMaxNumber'), 10);
    let inputAttempt = Number.parseInt(getInputValue('attempts'), 10);
    state.inputAttempt = inputAttempt;
    state.yourMinNumber = yourMinNumber;
    state.yourMaxNumber = yourMaxNumber;
    state.result = Math.round(Math.random() * (state.yourMaxNumber - state.yourMinNumber + 1)) + 1;
    console.log(state.result);

    //Settings validation
    if (Number.isNaN(yourMinNumber) || Number.isNaN(yourMaxNumber) || Number.isNaN(inputAttempt)) {
        setHTMLValue('out','Пожалуйста, введите числа');
    } else if (yourMinNumber < 0 || yourMinNumber > 200) {
        setHTMLValue('out', 'Введите положительное число! Оно не должно быть больше 200');
    } else if (yourMaxNumber < 0 || yourMaxNumber > 200) {
        setHTMLValue('out','Ваше число больше заданного диапозона, введите число меньше 200 и больше нуля!');
    } else if (inputAttempt < 1 || inputAttempt > 15) {
        setHTMLValue('out','Вы можете ввести от 1 до 15 попыток');
    } else {
        state.yourMinNumber = yourMinNumber;
        state.yourMaxNumber = yourMaxNumber;
        state.attempts = inputAttempt;
    }
}

function init() {
    const state = {
        result,
        attempts: 15,
        inputAttempt: 5,
        yourMinNumber: 0,
        yourMaxNumber: 200,
    };

    // getRandomNumber(state);
    addListener('Generate', 'click', generate.bind(null, state));
    addListener('save', 'click', saveSettings.bind(null, state));
}


// module.exports = generate;























