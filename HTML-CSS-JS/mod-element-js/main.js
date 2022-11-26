const square = document.getElementById('square');
const button = document.getElementById('submit');

const inputTL = document.getElementById('input-TL');
const inputTR = document.getElementById('input-TR');
const inputBR = document.getElementById('input-BR');
const inputBL = document.getElementById('input-BL');

function changeBorder() {

    square.style.borderRadius = `${inputTL.value || 0}px ${inputTR.value || 0}px ${inputBR.value || 0}px ${inputBL.value || 0}px`


    inputTL.value = ''
    inputTR.value = ''
    inputBR.value = ''
    inputBL.value = ''
}

