// const botoes = document.getElementsByClassName('botoes')
// const visor = document.getElementById('visor')

// for(i = 0; i < botoes.length; i++) {
//     botoes[i].addEventListener('click', (e) => {
//         switch(e.target.value) {
//             case '=': visor.value = eval(visor.value)
//             default: visor.value = visor.value + e.target.value
//         }
//     })
// }

const buttons = document.getElementsByClassName("botoes");
const visor = document.getElementById("visor");

const equalsBtn = document.getElementById("equals");
const cleanBtn = document.getElementById("clean");

const historico = document.getElementById('historico')

let verificador = false;

function limpar() {
  verificador = false;
  visor.value = "";
}

// 

function calcular() {
  verificador = true;
  historico.innerHTML = historico.innerHTML +  visor.value + '<br>'

  try {
    visor.value = eval(visor.value);
  } catch (error) {
    alert("Insira uma operação matemática que faça sentido!");
    visor.value = "";
  }

}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    verificador === true ? limpar() : null;

    visor.value = `${visor.value + e.target.innerHTML}`;

    verificador = false;
  });
}
