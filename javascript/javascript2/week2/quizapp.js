
const quizQuestions = [];

// my element forms
const form = document.getElementById('quizForm');
const questionInput = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const shuffleButton = document.getElementById('shuffleOptions');
const questionsContainer = document.getElementById('questionsContainer');

// Adding a Question
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const questionText = questionInput.value;
  const options = Array.from(document.querySelectorAll('.option')).map((input, index) => ({
    text: input.value,
    isCorrect: document.querySelector(`input[name="correctOption"][value="${index}"]`).checked
  }));

  const newQuestion = { id: quizQuestions.length + 1, question: questionText, options };
  quizQuestions.push(newQuestion);
  displayQuestions();
  form.reset();
});

// to be able to Shuffle Options

shuffleButton.addEventListener('click', () => {
  const optionInputs = Array.from(document.querySelectorAll('.option'));
  const shuffled = optionInputs.sort(() => Math.random() - 0.5);
  optionsContainer.innerHTML = '';
  shuffled.forEach((input, index) => {
    const label = document.createElement('label');
    label.textContent = `Option ${index + 1}:`;
    const correctRadio = document.createElement('input');
    correctRadio.type = 'radio';
    correctRadio.name = 'correctOption';
    correctRadio.value = index;

    optionsContainer.append(label, input, correctRadio, document.createElement('br'));
  });
});

//to Display the Questions

function displayQuestions() {
  questionsContainer.innerHTML = '';
  quizQuestions.forEach((q) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <p><strong>${q.question}</strong></p>
      <ul>
        ${q.options.map((o) => `<li>${o.text}</li>`).join('')}
      </ul>
      <button onclick="revealAnswer(${q.id})">Reveal Answer</button>
    `;
    questionsContainer.appendChild(listItem);
  });
}

// toReveal Answer
function revealAnswer(id) {
  const question = quizQuestions.find((q) => q.id === id);
  const listItems = Array.from(questionsContainer.querySelectorAll('li'));
  const listItem = listItems[id - 1];
  const options = listItem.querySelectorAll('ul > li');

  question.options.forEach((o, index) => {
    options[index].classList.add(o.isCorrect ? 'correct' : 'incorrect');
  });
}
