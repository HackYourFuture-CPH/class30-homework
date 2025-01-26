const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const userQuizButton = document.querySelector("#user-quiz");
const defaultQuizButton = document.querySelector("#default-quiz");
const players = document.querySelectorAll(".player-name");
const addQuestionForm = document.querySelector("#add-question-form");
const addOptionForm = document.querySelector("#add-option-form");
const saveQuizButton = document.querySelector("#save-quiz-button");
const startQuizButton = document.querySelector("#start-quiz-button");
const nextToPlayersButton = document.querySelector("#next-to-players-button");
const nextToScoresButton = document.querySelector("#next-to-scores-button");
const scoreSummary = document.querySelectorAll(".score-summary");
const tryAgainButton = document.querySelector("#try-again-button");
const newQuizButton = document.querySelector("#new-quiz-button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const timerElement = document.querySelector("#timer");
const pages = document.querySelectorAll(".page");



let countdown = 10; 
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
const playersInfo = [
  { name: "", score: 0 },
  { name: "", score: 0 },
];
let quizQuestions = [];
const userQuiz = [];
const maxScore = 10;




// Timer countdown
const startTimer = () => {setInterval(() => {
  console.log(countdown);
  timerElement.textContent = countdown;  
  countdown--; 

  if (countdown < 0) {  
    clearInterval(timerInterval);
    console.log("Time's up!");
    alert("Time's up!");
  }
}, 1000);
}



// User Quiz Form Handling
addQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionText = document.querySelector("#question-text").value;
  if (questionText) {
    userQuiz.push({ question: questionText, options: [] });
    document.querySelector("#question-text").value = "";
    alert("Question added!");
  }
  const questionsList = document.querySelector("#questions-list");
  const question = document.createElement("li");
  question.innerText = questionText;
  questionsList.appendChild(question);
});




// Add option for a user question
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




// Save user custom quiz
saveQuizButton.addEventListener("click", () => {
  if (userQuiz.length < 15) {
    alert("You must add at least 15 questions to save the quiz.");
    return;
  }
  alert("Your custom quiz has been saved successfully!");
});





// Start the quiz with the player names
startQuizButton.addEventListener("click", () => {
  playersInfo[0].name = players[0].value;
  playersInfo[1].name = players[1].value;
  player1.querySelector(".name").textContent = playersInfo[0].name;
  player2.querySelector(".name").textContent = playersInfo[1].name;
  updateScores();
  navigateToPage(2);
 // displayQuestion();
  startTimer();
});

// Fetch the quiz questions from a json
async function fetchQuizQuestions() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Aminata00/Aminata00.github.io-/refs/heads/main/APIS/data.json");
    const data = await response.json();
    quizQuestions = data.quizQuestions;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
  }
};



// Display question and options
function displayQuestion() {
  let currentQuestion = 0;
  const questionData = quizQuestions[currentQuestion];
  const option = document.createElement('label');
  option.className = 'option';
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'quiz';

  const question = document.createElement('div');
  question.className = 'question';
  question.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

    option.appendChild(radio);
    addOptionForm.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);


// Shuffle options
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Check the answer for the question
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizQuestions[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizQuestions[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizQuestions[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizQuestions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

// Display result after quiz completion
function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
}

// Retry the quiz
function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

// Show answers of incorrect attempts
function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizQuestions.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

// Navigate to specific page
function navigateToPage(pageIndex) {
  pages.forEach(page => page.classList.add("hidden"));
  pages[pageIndex].classList.remove("hidden");
}






// Update scores for players
function updateScores() {
  player1.querySelector(".score").value = playersInfo[0].score;
  player2.querySelector(".score").value = playersInfo[1].score;
  for (const player of playersInfo) {
    if (player.score >= maxScore) {
      showWinner();
      break;
    }
  }
}



// Show winner message and sound
function showWinner() {
  const winSound = new Audio('goodresult82807.mp3'); 
  winSound.play(); 
  const winners = playersInfo.filter((player) => player.score === maxScore);
  const message = document.createElement("li");
  scoreSummary.appendChild(message);
  if (winners.length === 2) {
    message.innerText = "It's a tie !!";
  } else {
    message.innerText = `The winner of this battle is: ${winners[0].name}`;
  }
}




// Reset the quiz if the user tries again 
function resetQuiz() {
  playersInfo.forEach((player) => (player.score = 0));
  updateScores();
}



// Initialize quiz again 
fetchQuizQuestions();
