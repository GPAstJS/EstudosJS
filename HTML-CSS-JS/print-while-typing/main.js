const criarInput = document.createElement('input');
const criarDiv = document.createElement('div')

document.body.appendChild(criarInput);
document.body.appendChild(criarDiv);

criarDiv.setAttribute('id', 'myDiv');
criarInput.setAttribute('id','myInput');

const input = document.getElementById('myInput');
const div = document.getElementById('myDiv');

input.oninput = function print() {
    div.innerHTML = input.value 
}
