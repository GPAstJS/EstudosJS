// Pegando os elementos HTML.
const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const inputJob = document.getElementById("input-job");
const div1 = document.getElementById("div1");

const myBtn = document.getElementById('save-button')



// Criando uma segunda div

const criarDiv_2 = document.createElement('div');
div1.appendChild(criarDiv_2)

//Atribuindo ID para facilitar.
criarDiv_2.setAttribute('id', 'div2');

const div2 = document.getElementById('div2')

let dados = [];

document.body.addEventListener('keydown', (event) => {
  if(event.key == "Enter") {
    imprimir()
  }
})

function imprimir() {

  dados.push({
    nome: inputName.value,
    idade: inputAge.value,
    profissao: inputJob.value
  })

  
  for(i = 0; i < dados.length; i++) {
    if (i == 0) {
      div2.innerHTML = `Nome: ${dados[i].nome} <br> Idade: ${dados[i].idade} <br> Profissão: ${dados[i].profissao} <br>`;
    } else {
      div2.innerHTML += `<hr/> Nome: ${dados[i].nome} <br> Idade: ${dados[i].idade} <br> Profissão: ${dados[i].profissao} <br> <br>`;
    }
  }

  console.log(dados);
  



  inputName.value = "";
  inputAge.value = "";
  inputJob.value = "";
}

/*
function imprimir() {
  const inputName = document.getElementById("input-name");
  const inputAge = document.getElementById("input-age");
  const inputJob = document.getElementById("input-job");
  const div = document.getElementById('main')

  let dados = {
    nome: inputName.value,
    idade: inputAge.value,
    profissao: inputJob.value,
  };

  console.log(dados);
  
  div.innerHTML = `Nome: ${inputName.value}, Idade: ${inputAge.value}, Profissão: ${inputJob.value}`


  inputName.value = "";
  inputAge.value = "";
  inputJob.value = "";
}
*/
