const currentQuestion = document.getElementById("quiz--visor--text");
const bar = document.getElementsByClassName('quiz--visor--barLoader--part')
const score = document.getElementById("quiz--visor--score--number");
const questionStatemento = document.getElementById("quiz--question--text");
const answers = Array.from(document.getElementsByClassName("quiz--question--answer"));
const nextBtn = document.getElementById("quiz--action--text");
const showResults = document.getElementById('hidden')

const quizDiv = document.getElementById("quiz");

const finalScore = document.getElementById('quiz--score')
const message = document.getElementById('quiz--message')

const restartGame = document.getElementById('quiz--results--restart')

const answersCorretas = [
  "Cascading Style Sheet",
  "Hyper Text Markup Language",
  "World Wide Web's Creator",
  "JavaScript Object Notation",
];

const questions = [
  {},
  {
    titulo: "In web design, what does HTML stand for?",
    alternatives: [
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "Hiphen Transfer Markup Language",
    ],
  },
  {
    titulo: "Who was Tim Berners-Lee?",
    alternatives: ["A Professor", "World Wide Web's Creator", "A Farmer"],
  },
  {
    titulo: "What does JSON stand for?",
    alternatives: [
      "Java's Son",
      "A Globalist Conspiracy",
      "JavaScript Object Notation",
    ],
  },
];

const newanswers = [
  "Hyper Text Markup Language",
  "Hyper Transfer Markup Language",
  "Hiphen Transfer Markup Language",
];

let userAnswered = false;
let counter = 0;
let pontuation = 0;

function verifyAnswer(answer) {

  score.innerText = pontuation;
  finalScore.innerText = `Your Score: ${pontuation}`

  if (userAnswered == false) {
    userAnswered = true;
    
    if (answer.innerText === answersCorretas[counter]) {
      pontuation++;
      answer.style.border = "1px solid green";
      answer.style.color = "darkgreen";
    }
    else answers.filter((el) => {
      answer.style.border = "1px solid red";
      answer.style.color = "red";
      
      if (el.innerText === answersCorretas[counter]) {
        el.style.border = "1px solid green";
        el.style.color = "darkgreen";
      }
    });
  } 

  bar[counter + 1].style.transition = '0.25s'
  bar[counter + 1].style.background = 'red';
  bar[counter + 1].style.opacity = '0.6'

  score.innerText = pontuation;
  finalScore.innerText = `Your Score: ${pontuation}`
}

const endGame = () => {
 quizDiv.style.visibility = 'collapse'
 showResults.style.visibility = 'visible'
}

function nextQuestion() {
   //aqui o counter vai ser + 1 para quando chegar na ultima questão, ele pare e faça o endgame
  if (userAnswered == true && counter + 1 < questions.length) {
    counter++;
    
    for (i = 0; i < questions.length - 1; i++) {
      answers[i].style.color = "black";
      answers[i].style.fontSize = "30pt";
      answers[i].style.fontFamily = " 'Open Sans', sans-serif";
      answers[i].style.border = "1px solid black";
      
      if( counter < questions.length ) {
        answers[i].innerText = questions[counter].alternatives[i]; // isso ta gerando erro 
        questionStatemento.innerText = questions[counter].titulo;
        currentQuestion.innerText = `Question ${counter + 1}/4`;
      }
    }
    score.innerText = pontuation;
    finalScore.innerText = `Your Score: ${pontuation}`
    
    userAnswered = false;
  }
  else endGame() // <-----
}


//o botao de restart pode só carregar a pagina? kkkkkkkk
// ou devo fazer o game reiniciar do 0??o