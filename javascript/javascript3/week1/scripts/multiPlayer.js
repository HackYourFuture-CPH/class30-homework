//import { questions } from "./questions.js";
const quizContainer = document.querySelectorAll(".quiz-container");
const quantity = document.querySelectorAll(".quantity-outof");
const questionNumber = document.querySelectorAll(".question-number");
const pointHolder = document.querySelectorAll(".point-holder");
const questionTitle = document.querySelectorAll(".question-title");
const buttonsPlayer1 = document.querySelectorAll(".buttons-player1");
const buttonsPlayer2 = document.querySelectorAll(".buttons-player2");


async function fetchQuestion(){
  const response = await fetch("https://raw.githubusercontent.com/jalilhu/jalilhu.github.io/refs/heads/main/data/quiz_data.json")
  const data = await response.json()
  const sortedAlphabetically =  data.questions.sort() 
  await whoIsTheWinner(sortedAlphabetically);
}


await fetchQuestion()

async function resultAndSwitchPlayer1(questions) {
  let correctPoints = 0;
  let incorrectPoints = 0;

  let currentQuestionIndex = 0;
  let answer;

  while (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];

    questionTitle[0].textContent = question.question;
    quantity[0].textContent = `${currentQuestionIndex + 1} out of ${
      questions.length
    }`;
    pointHolder[0].textContent = `Correct: ${correctPoints}`;
    questionNumber[0].textContent = `Incorrect: ${incorrectPoints}`;
    answer = question.answer;

    let value = await new Promise((resolve) => {
      buttonsPlayer1.forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            resolve(button.value === "true");
          },
          { once: true }
        );
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
  questionTitle[0].textContent = "Quiz completed!";
  quantity[0].textContent = "";
  pointHolder[0].textContent = `Correct: ${correctPoints}`;
  questionNumber[0].textContent = `Incorrect: ${incorrectPoints}`;
  return [correctPoints, incorrectPoints];
}

async function resultAndSwitchPlayer2(questions) {
  let correctPoints = 0;
  let incorrectPoints = 0;

  let currentQuestionIndex = 0;
  let answer;

  while (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];

    questionTitle[1].textContent = question.question;
    quantity[1].textContent = `${currentQuestionIndex + 1} out of ${
      questions.length
    }`;
    pointHolder[1].textContent = `Correct: ${correctPoints}`;
    questionNumber[1].textContent = `Incorrect: ${incorrectPoints}`;
    answer = question.answer;

    let value = await new Promise((resolve) => {
      buttonsPlayer2.forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            resolve(button.value === "true");
          },
          { once: true }
        );
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
  questionTitle[1].textContent = "Quiz completed!";
  quantity[1].textContent = "";
  pointHolder[1].textContent = `Correct: ${correctPoints}`;
  questionNumber[1].textContent = `Incorrect: ${incorrectPoints}`;
  return [correctPoints, incorrectPoints];
}

async function whoIsTheWinner(data) {
  const [player1Scores, player2Scores] = await Promise.all([
    resultAndSwitchPlayer1(data),
    resultAndSwitchPlayer2(data),
  ]);
    let player1Score = player1Scores[0] + player2Scores[1]
    let player2Score = player2Scores[0] + player1Scores[1]
    

  if (player1Score > player2Score) {
    console.log(player1Score , player2Score)
    createWinnerElements("Player One", player1Score, player2Score);
  } else if (player2Score > player1Score) {
    createWinnerElements("Player Two", player1Score, player2Score);
  } else {
    createWinnerElements("Both Players", player1Score, player2Score);
  }
}
function createWinnerElements(playerName, player1Score, player2Score) {
    console.log(player1Score, player2Score)
    console.log(typeof player1Score, typeof player2Score)
  let winnerContainer = document.createElement("div");
  let playerOneScore = document.createElement('p')
  let playerTwoScore = document.createElement('p')
  playerOneScore.textContent = `Player 1 Score: ${player1Score}`
  playerTwoScore.textContent = `Player 2 Score: ${player2Score}`
  winnerContainer.appendChild(playerOneScore)
  winnerContainer.appendChild(playerTwoScore)
  winnerContainer.className = "winner";
  let winnerTitle = document.createElement("h1");
  winnerTitle.textContent = `THE WINNER ${playerName}`;
  winnerContainer.appendChild(winnerTitle);
  const main = document.querySelector("main");
  main.appendChild(winnerContainer);
}
