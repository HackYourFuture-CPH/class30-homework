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

const playersInfo = [
  { name: "", score: 0 },
  { name: "", score: 0 },
];
let quizQuestions = [];
const userQuiz = [];
const maxScore = 10;


async function fetchQuizQuestions() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Aminata00/Aminata00.github.io-/refs/heads/main/APIS/data.json");
    const data = await response.json();
    quizQuestions = data.quizQuestions;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
  }
}

function sortQuestionsAlphabetically() {
  quizQuestions.sort((a, b) => a.question.localeCompare(b.question));
}

function shuffleQuestions() {
  for (let i = quizQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
  }
}

function applyQuestionOrder() {
  const order = questionOrderSelect.value;
  if (order === "alphabetical") {
    sortQuestionsAlphabetically();
  } else if (order === "random") {
    shuffleQuestions();
  }
}

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

saveQuizButton.addEventListener("click", () => {
  if (userQuiz.length < 15) {
    alert("You must add at least 15 questions to save the quiz.");
    return;
  }
  alert("Your custom quiz has been saved successfully!");
});

startQuizButton.addEventListener("click", () => {
  playersInfo[0].name = players[0].value;
  playersInfo[1].name = players[1].value;
  player1.querySelector(".name").textContent = playersInfo[0].name;
  player2.querySelector(".name").textContent = playersInfo[1].name;
  updateScores();
  applyQuestionOrder();
  navigateToPage(2);
});

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

function updateScores() {
  player1.querySelector(".score").value = playersInfo[0].score;
  player2.querySelector(".score").value = playersInfo[1].score;
  for (const player of playersInfo) {
    if (player.score >= maxScore) {
      clearInterval(interval);
      showWinner();
      break;
    }
  }
}

function showWinner() {
  const winners = playersInfo.filter((player) => player.score === maxScore);
  if (winners.length === 2) {
    alert("It's a tie!!");
  } else {
    alert(`${winners[0].name} wins! 🎉`);
  }
}

function resetQuiz() {
  playersInfo.forEach((player) => (player.score = 0));
  updateScores();
}

function navigateToPage(pageIndex) {
  pages[currentPage].classList.add("hidden");
  currentPage = pageIndex;
  pages[currentPage].classList.remove("hidden");
}

fetchQuizQuestions();