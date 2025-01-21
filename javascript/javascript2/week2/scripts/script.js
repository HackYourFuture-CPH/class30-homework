const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of Denmark?",
    options: [
      { text: "Berlin", isCorrect: false },
      { text: "Copenhagen", isCorrect: true },
      { text: "Madrid", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
    explanation: "Copenhagen is the capital of Denmark.",
  },
  {
    id: 2,
    question: "What is the biggest animal on land?",
    options: [
      { text: "Giraffe", isCorrect: false },
      { text: "Bear", isCorrect: false },
      { text: "Elephant", isCorrect: true },
      { text: "Cat", isCorrect: false },
    ],
    explanation: "Elephant is the biggest animal on land.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  createQuizContainer();
  document
    .getElementById("form-container")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      let score = 0;
      for (let quiz of quizQuestions) {
        const correctAnswer = quiz.options.find((option) => option.isCorrect);
        const userAnswer = formData.get(`question${quiz.id}`);
        if (userAnswer === correctAnswer.text) {
          score++;
        }
        
      }
      form.style.display = "none";
      alert(`You scored ${score} out of ${quizQuestions.length}`);
    });
});

function createContainerDiv() {
  const containerDiv = document.createElement("div");
  containerDiv.id = "form-container";
  containerDiv.className = "container";
  document.body.appendChild(containerDiv);
  return containerDiv;
}
function createFormParent() {
  const formParent = document.createElement("div");
  formParent.className = "form-items";
  return formParent;
}

function createForm() {
  const formElement = document.createElement("form");
  formElement.className = "quiz-form";
  return formElement;
}

function createQuizContainer() {
  const containerDiv = createContainerDiv();
  for (let quiz of quizQuestions) {
    const quizDiv = createFormParent();
    const formElement = createForm();
    const questionLabel = document.createElement("label");
    questionLabel.innerText = quiz.question;
    questionLabel.setAttribute("for", `question${quiz.id}`);
    formElement.appendChild(questionLabel);

    for (let option of quiz.options) {
      const optionLabel = document.createElement("label");
      optionLabel.appendChild(document.createElement("br"));
      const optionRadioButton = document.createElement("input");
      optionRadioButton.setAttribute("type", "radio");
      optionRadioButton.setAttribute("name", `question${quiz.id}`);
      optionRadioButton.value = option.text;
      optionRadioButton.className = `option${quiz.id}`;
      optionLabel.appendChild(optionRadioButton);
      optionLabel.appendChild(document.createTextNode(option.text));
      formElement.appendChild(optionLabel);
    }
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    formElement.appendChild(document.createElement("br"));
    formElement.appendChild(document.createElement("br"));
    formElement.appendChild(submitButton);
    quizDiv.appendChild(formElement);
    quizDiv.appendChild(document.createElement("br"));
    containerDiv.appendChild(quizDiv);
  }
}
