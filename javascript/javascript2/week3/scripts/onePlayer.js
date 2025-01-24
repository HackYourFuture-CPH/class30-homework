import { questions } from "./questions.js";
const quizContainer = document.querySelector("#quiz-container");
const quantity = quizContainer.querySelector("#quantity-outof");
const questionNumber = quizContainer.querySelector("#question-number");
const pointHolder = quizContainer.querySelector("#point-holder");
const questionTitle = quizContainer.querySelector("#question-title");
const buttons = quizContainer.querySelectorAll("button");

let correctPoints = 0;
let incorrectPoints = 0;

let currentQuestionIndex = 0; 
let answer;

resultAndSwitch();


async function resultAndSwitch() {
  while (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];

    questionTitle.textContent = question.question;
    quantity.textContent = `${currentQuestionIndex + 1} out of ${questions.length}`;
    pointHolder.textContent = `Correct: ${correctPoints}`;
    questionNumber.textContent = `Incorrect: ${incorrectPoints}`;
    answer = question.answer;

    let value = await new Promise((resolve) => {
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          resolve(button.value === "true"); 
        });
      });
    });

    if (value === answer) {
      correctPoints++;
    } else {
      incorrectPoints++;
    }

    currentQuestionIndex++;
  }

  console.log("Quiz completed!");
  questionTitle.textContent = "Quiz completed!";
  quantity.textContent = "";
  pointHolder.textContent = `Correct: ${correctPoints}`;
  questionNumber.textContent = `Incorrect: ${incorrectPoints}`;
}






// <section id="quiz-container">
//     <h3 id="quantity-outof">1 out of 10</h3>
//     <div id="point-number-holder">
//         <p id="question-number">Question</p>
//         <p id="point-holder">Point</p>
//     </div>
//     <h2 id="question-title">question</h2>
//     <div id="buttons-holder">
//         <button id="true-button">True</button>
//         <button id="false-button">False</button>
//     </div>
// </section>
