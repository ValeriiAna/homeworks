function inputValueSetter(id,value) {
    const input = document.getElementById(id);
    if(input){
        input.value = value;
        return true;
    }
    return false;
}

function setHTMLValue(id,value) {
    const node = document.getElementById(id);
    if(node){
        node.innerHTML = value;
        return true;
    }
    return false;
}

function getInputValue(id) {
    const input = document.getElementById(id);
    if(input) {
        return input.value;
    }
    return '';
}

function attemptsMinus(state) {
    state.inputAttempt--;
}

// window.inputValueSetter = inputValueSetter;
// window.setHTMLValue = setHTMLValue;
// window.getInputValue = getInputValue;
// window.attemptsMinus = attemptsMinus;

module.exports = {inputValueSetter,setHTMLValue,getInputValue, attemptsMinus};