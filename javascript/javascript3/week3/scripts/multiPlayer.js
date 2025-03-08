//import { questions } from "./questions.js";
const quizContainer = document.querySelectorAll(".quiz-container");
const quantity = document.querySelectorAll(".quantity-outof");
const questionNumber = document.querySelectorAll(".question-number");
const pointHolder = document.querySelectorAll(".point-holder");
const questionTitle = document.querySelectorAll(".question-title");
const buttonsPlayer1 = document.querySelectorAll(".buttons-player1");
const buttonsPlayer2 = document.querySelectorAll(".buttons-player2");
const error = new Audio('./audio/error.mp3');
const correct = new Audio('./audio/correct.mp3')


async function  fetchQuestion() {
  const response = await fetch(
    "https://raw.githubusercontent.com/jalilhu/jalilhu.github.io/refs/heads/main/data/quiz_data.json"
  );
  const data = await response.json();
  const sortedAlphabetically = data.questions.sort();
  await whoIsTheWinner(sortedAlphabetically);
}

await fetchQuestion();

async function resultAndSwitchPlayer(questions, playerIndex) {
  let correctPoints = 0;
  let incorrectPoints = 0;
  let currentQuestionIndex = 0;
  let answer;
  
  while (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];

    questionTitle[playerIndex].textContent = question.question;
    quantity[playerIndex].textContent = `${currentQuestionIndex + 1} out of ${questions.length}`;
    pointHolder[playerIndex].textContent = `Correct: ${correctPoints}`;
    questionNumber[playerIndex].textContent = `Incorrect: ${incorrectPoints}`;
    answer = question.answer;

    let value = await new Promise((resolve) => {
      (playerIndex === 0 ? buttonsPlayer1 : buttonsPlayer2).forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            resolve(button.value === "true");
          },
          { once: true }
        );
      });
    });

    const quizContainer = document.querySelector(`.quiz-container:nth-child(${playerIndex + 1})`);

    if (value === answer) {
      correct.play();
      quizContainer.style.backgroundColor = "rgba(0, 255, 34, 0.37)";
    } else {
      error.play();
      quizContainer.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }

    setTimeout(() => {
      quizContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }, 500);

    value === answer ? correctPoints++ : incorrectPoints++;
    currentQuestionIndex++;
  }

  console.log("Quiz completed!");
  questionTitle[playerIndex].textContent = "Quiz completed!";
  quantity[playerIndex].textContent = "";
  pointHolder[playerIndex].textContent = `Correct: ${correctPoints}`;
  questionNumber[playerIndex].textContent = `Incorrect: ${incorrectPoints}`;
  
  return [correctPoints, incorrectPoints];
}

async function whoIsTheWinner(data) {
  const [player1Scores, player2Scores] = await Promise.all([
    resultAndSwitchPlayer(data, 0),
    resultAndSwitchPlayer(data, 1),
  ]);
  let player1Score = player1Scores[0] + player2Scores[1];
  let player2Score = player2Scores[0] + player1Scores[1];

  if (player1Score > player2Score) {
    console.log(player1Score, player2Score);
    createWinnerElements("Player One", player1Score, player2Score);
  } else if (player2Score > player1Score) {
    createWinnerElements("Player Two", player1Score, player2Score);
  } else {
    createWinnerElements("Both Players", player1Score, player2Score);
  }
}
function createWinnerElements(playerName, player1Score, player2Score) {
  console.log(player1Score, player2Score);
  console.log(typeof player1Score, typeof player2Score);
  let winnerContainer = document.createElement("div");
  let playerOneScore = document.createElement("p");
  let playerTwoScore = document.createElement("p");
  playerOneScore.textContent = `P1 Score: ${player1Score}`;
  playerTwoScore.textContent = `P2 Score: ${player2Score}`;
  winnerContainer.appendChild(playerOneScore);
  winnerContainer.appendChild(playerTwoScore);
  winnerContainer.className = "winner";
  let winnerTitle = document.createElement("h1");
  let winnerName = document.createElement('h1');
  winnerTitle.textContent = `THE WINNER`;
  winnerName.textContent= `${playerName}`
  winnerContainer.appendChild(winnerTitle);
  winnerContainer.appendChild(winnerName)
  const main = document.querySelector("main");
  document.querySelector('.quiz-container:nth-child(1)').style.display = 'none';
  document.querySelector('.quiz-container:nth-child(2)').style.display = 'none';
  main.appendChild(winnerContainer);
}
