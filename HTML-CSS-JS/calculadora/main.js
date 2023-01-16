const buttons = document.getElementsByClassName("botoes");
const visor = document.getElementById("visor");

const equalsBtn = document.getElementById("equals");
const cleanBtn = document.getElementById("clean");

const historico = document.getElementById("historico");

let tamanhoDoVisor;
let verificador = false;

function limpar() {
  verificador = false;
  visor.value = "";
}

function calcular() {
  verificador = true;

  valoresDentroDoVisor = visor.value.split("");

  const visorFiltrado = valoresDentroDoVisor.filter(
    (el) => el == "+" || el == "-" || el == "/" || el == "*"
  );

  if (visorFiltrado.length >= 1 && !isNaN(visor.value[0])) {
    try {
      visor.value = eval(visor.value);
      historico.innerHTML = historico.innerHTML + visor.value + "<br>";
      
    } catch (error) {
      alert("Insira uma operação matemática que faça sentido!");
      visor.value = "";
    }
  } else alert("Por favor, insira um operando!");
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    verificador === true ? limpar() : null;

    visor.value = `${visor.value + e.target.innerHTML}`;

    verificador = false;
  });
}
