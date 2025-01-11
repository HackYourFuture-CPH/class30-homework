const players = document.querySelectorAll(".player-name");
const addQuestionForm = document.querySelector("#add-question-form");
const addOptionForm = document.querySelector("#add-option-form");
const saveQuizButton = document.querySelector("#save-quiz-button");
const startQuizButton = document.querySelector("#start-quiz-button");
const nextToPlayersButton = document.querySelector("#next-to-players-button");
const nextToScoresButton = document.querySelector("#next-to-scores-button");
const tryAgainButton = document.querySelector("#try-again-button");
const newQuizButton = document.querySelector("#new-quiz-button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const timerElement = document.querySelector("#timer");
const pages = document.querySelectorAll(".page");
const currentPage = 0;
let timer = 10;
let interval;

const playersInfo = [{ name: "", score: 0 }, { name: "", score: 0 }];
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    options: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "22", isCorrect: false },
      { text: "5", isCorrect: false },
    ],
  },
];
const userQuiz = [{ question: "", options: [{ text: "", isCorrect }] }];
const maxScore = 10;

addQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionText = document.querySelector("#question-text").value;
  if (questionText) {
    userQuiz.push({ question: questionText, options: [] });
    document.querySelector("#question-text").value = "";
    alert("Question added!");
  }
});

addOptionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (userQuiz.length === 0) {
    alert("Please add a question first!");
    return;
  }
  const optionText = document.querySelector("#option-text").value;
  const isCorrect = document.querySelector("#is-correct").checked;
  if (optionText) {
    userQuiz[userQuiz.length - 1].options.push({ text: optionText, isCorrect });
    document.querySelector("#option-text").value = "";
    document.querySelector("#is-correct").checked = false;
    alert("Option added!");
  }
});

saveQuizButton.addEventListener("click", saveQuiz);
startQuizButton.addEventListener("click", startQuiz);
nextToPlayersButton.addEventListener("click", () => navigateToPage(1));
nextToScoresButton.addEventListener("click", () => navigateToPage(3));
tryAgainButton.addEventListener("click", resetQuiz);
newQuizButton.addEventListener("click", () => navigateToPage(0));

document.querySelectorAll(".correct").forEach((button, index) => {
  button.addEventListener("click", () => {
    playersInfo[index].score++;
    updateScores();
  });
});

document.querySelectorAll(".wrong").forEach((button, index) => {
  button.addEventListener("click", () => {
    const otherPlayerIndex = index === 0 ? 1 : 0;
    playersInfo[otherPlayerIndex].score++;
    updateScores();
  });
});

setInterval(() => {
  timer--;
  timerElement.textContent = timer;
  if (timer <= 0) {
    clearInterval(interval);
    alert("Time's up!");
    navigateToPage(3);
  }
}, 1000);

function addQuestion() {
  const questionText = prompt("write a question here");
  if (questionText) {
    userQuiz.push({ question: questionText, options: [] });
  }
}

function addOption() {
  const optionText = prompt(" write a possible answer here");
  const isCorrect = confirm("Is this the correct answer?");
  if (optionText) {
    userQuiz[userQuiz.length - 1].options.push({ text: optionText, isCorrect });
  }
}

function saveQuiz() {
  if (userQuiz.length < 15) {
    alert("You must add at least 15 questions to save the quiz.");
    return;
  }
  alert("Your custom quiz has been saved successfully!");
}

function startQuiz() {
  playersInfo[0].name = players[0].value;
  playersInfo[1].name = players[1].value;
  player1.querySelector(".name").textContent = playersInfo[0].name;
  player2.querySelector(".name").textContent = playersInfo[1].name;
  makeScores();
  navigateToPage(2);
}

function makeScores() {
  playersInfo[0].score = player1.querySelector(".score").value;
  playersInfo[1].score = player2.querySelector(".score").value;
}

function updateScores() {
  makeScores();
  for (const player of playersInfo) {
    if (player.score >= 10) {
      clearInterval(interval);
      showWinner();
      break;
    }
  }
}

function showWinner() {
  const winner = playersInfo.filter((player) => player.score === maxScore);
  if (winner.length === 2) {
    alert("It's a tie !! ");
  } else {
    alert(`${winner[0].name} wins! 🎉`);
  }
}

function resetQuiz() {
  playersInfo.forEach((player) => (player.score = 0));
  makeScores();
}
