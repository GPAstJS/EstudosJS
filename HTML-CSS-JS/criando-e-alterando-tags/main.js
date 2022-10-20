// criando os elementos
const criarDiv = document.createElement('div')
const criarBtn = document.createElement('button');
const criarInput = document.createElement('input')

// injetando no HTML
document.body.appendChild(criarInput);
document.body.appendChild(criarBtn);
document.body.appendChild(criarDiv);

// setando ID para os Elementos
criarDiv.setAttribute('id', 'myDiv');

criarBtn.setAttribute('id', 'myBtn');

criarInput.setAttribute('id', 'myInput')

// Armazenando elas de uma maneira mais fácil!

const div = document.getElementById('myDiv');
const button = document.getElementById('myBtn');
const input = document.getElementById('myInput')

// Estilizando os elementos
input.style.border = '2px solid black'
input.style.borderRadius = '50px'

button.style.backgroundColor = '#2cab3b'
button.style.border = '2px solid #2cab3b'
button.style.borderRadius = '25px'
button.style.marginLeft = '5px'

/*
    aqui estou alterando o atributo onclick do botão, que criei nela uma função que
    faz a lógica main funcionar
*/

button.textContent = 'teste'
button.onclick = function() {
    div.innerHTML = div.innerHTML + "<br>" + input.value
    input.value = ''
}