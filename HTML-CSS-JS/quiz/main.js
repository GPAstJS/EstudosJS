const questaoAtual = document.getElementById("quiz--visor--text");
const score = document.getElementById("quiz--visor--score--number");
const enunciado = document.getElementById("quiz--question--text");
const respostas = document.getElementsByClassName("quiz--question--answer");
const nextBtn = document.getElementById("quiz--action--text");



let counter = 0;

const respostasCorretas = [
  "Cascading Style Sheet",
  "Hyper Text Markup Language",
  "World Wide Web's Creator",
  "JavaScript Object Notation",
];

const questions = [
  {
    titulo: "In web design, what does HTML stand for?",
    alternativas: [
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "Hiphen Transfer Markup Language",
    ],
  },
  {
    titulo: "Who was Tim Berners-Lee",
    alternativas: ["A Professor", "World Wide Web's Creator", "A Farmer"],
  },
  {
    titulo: "What does JSON stand for?",
    alternativas: [
      "Java's Son",
      "JavaScript Object Notation",
      "A Globalist Conspiracy",
    ],
  },
];

let userClickedNext = false;
let userAnswered = false;

const newRespostas = [
  "Hyper Text Markup Language",
  "Hyper Transfer Markup Language",
  "Hiphen Transfer Markup Language",
];

function verifyAnswer(answer) {
  if (userAnswered == false) {
    userAnswered = true;

    for (i = 0; i < respostasCorretas.length; i++) {
      if (answer.innerText == respostasCorretas[i]) {
        answer.style.color = "#44ad34";
        score.innerText = parseInt(score.innerText) + 1;
        answer.style.border = "1px solid green";
        break;
      } else {
        answer.style.border = "1px solid red";
        answer.style.color = "darkred";
      }
    }
  }
}

// function nextQuestion() {
//   if (userAnswered == true) {
//     userAnswered = false;

//     enunciado.innerText = "In web design, what does HTML stand for?";
//     questaoAtual.innerText = "Question 2/2";

//     for (i = 0; i < newRespostas.length; i++) {
//   respostas[i].style.color = "black";
//   respostas[i].innerText = newRespostas[i];
//   respostas[i].style.fontSize = "30pt";
//   respostas[i].style.fontFamily = " 'Open Sans', sans-serif";
//   respostas[i].style.border = "1px solid black";
//     }
//   }
// }

function nextQuestion() {
  if (userAnswered == true) {
    userAnswered = false;

    counter++;

    for (i = 0; i < respostas.length; i++) {
      respostas[i].style.color = "black";
      respostas[i].style.fontSize = "30pt";
      respostas[i].style.fontFamily = " 'Open Sans', sans-serif";
      respostas[i].style.border = "1px solid black";
    }

    for (i = 0; i < questions.length; i++) {
      enunciado.innerText = questions[counter - 1].titulo;
      questaoAtual.innerText = `Questão ${counter + 1}/4`;
      respostas[i].innerText = questions[counter - 1].alternativas[i];
    }
  }  
}
