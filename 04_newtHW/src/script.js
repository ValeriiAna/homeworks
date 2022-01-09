const {addListener, getInputValue,setHTMLValue} = require('./utils');

const resultNumbers = [];
let resultCount = 1;

function random() {

    let generateBtn = document.querySelector('#generate')

    let fromInput = Number.parseInt(getInputValue('fromInput'), 10);

    let toInput = Number.parseInt(getInputValue('toInput'), 10);

    result = Math.round(Math.random() * (toInput - fromInput + 1)) + 1;

    if (resultNumbers.length === toInput - 1) {
        generateBtn.disabled = true;
        return;
    }

    if (resultNumbers.includes(result)) {
        random();
        return
    }
    if (resultCount === 1) {
        setHTMLValue('genNumber','Generated number: ')
    }
    resultCount++;

    resultNumbers.push(result);
    setHTMLValue('generateNumbers',result)
}

addListener('generate', 'click', random.bind());

module.exports = random;