const quizQuestions = {
  id: 1,
  question: "What is the capital of Denmark?",
  options: [
    { text: "Berlin", isCorrect: false },
    { text: "Copenhagen", isCorrect: true },
    { text: "Madrid", isCorrect: false },
    { text: "Rome", isCorrect: false },
  ],
  explanation: "Copenhagen is the capital of Denmark.",
};

document.addEventListener("DOMContentLoaded", function () {

  updateQuestion();
  getResult();

  function updateQuestion() {
    const questionLabel = document.querySelector("label");
    questionLabel.innerText = quizQuestions.question;
    questionLabel.appendChild(document.createElement("br"));
    updateQuestionOptions(questionLabel);
  }

  function updateQuestionOptions(parent) {
    for (const option of quizQuestions.options) {
      const label = document.createElement("label");
      label.textContent = option.text;
      let radioInput = document.createElement("input");
      radioInput.setAttribute("type", "radio");
      radioInput.setAttribute("name", "question");
      radioInput.value = option.text;
      radioInput.className = "options";
      label.appendChild(radioInput);
      parent.appendChild(label);
      parent.appendChild(document.createElement("br"));
    }
  }
  function getResult() {
    const radioButtons = document.getElementsByClassName("options");
    for (const button of radioButtons) {
      button.addEventListener("click", function (e) {
        const isCorrect = checkAnswer(e.target.checked, e.target.value, radioButtons);
        console.log("Is this correct", isCorrect)
        createAnswerElement(isCorrect);
      });
    }
  }
  function createAnswerElement(isCorrect) {
    const newPara = document.createElement("p");
    newPara.innerText = isCorrect ? "Correct" : "Incorrect";
    newPara.style.backgroundColor = isCorrect ? "green" : "red";
    newPara.style.color = "white";
    const answerNode = document.querySelector("#answer");
    answerNode.appendChild(newPara);
  }
  function checkAnswer(isChecked, value, radioButtons) {
    let correctAnswer = "";
    if (isChecked === true) {
      quizQuestions.options.map((b) => {
        if (b.isCorrect) {
          correctAnswer = b.text;
        }
      });
    }
    let isCorrect = value === correctAnswer;
    for (const button of radioButtons) {
      button.disabled = true;
    }
    return isCorrect;
  }
});
