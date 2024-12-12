const quizquestion = document.querySelector("#add-question");
const addquestionButton = document.querySelector("#add-question-button");
const questionsListElement = document.querySelector("#questions-list");
const questions = [];

const optionInput = document.querySelector("#option-input");
const saveOptionButton = document.getElementsByClassName("#save-option");
const options = [];


addquestionButton.addEventListener("click", addQuestion);


function createQuestionListItem(questionToAdd) {
    const listItem = document.createElement("li");
    listItem.innerText = questionToAdd;
    questionsListElement.appendChild(listItem);
}

function addQuestion() {
    const questionToAdd = quizquestion.value; 
        questions.push(questionToAdd); 
        createQuestionListItem(questionToAdd);  
        quizquestion.value = ""; 
}

function createOptionListItem(optionToAdd) {
  saveOptionButton.addEventListener('click', addOption);
    const listItem = document.createElement("li");
    listItem.innerText = optionToAdd;
    optionListElement.appendChild(listItem);
}

function addOption() {
    const optionToAdd = optionInput.value ; 
        options.push(optionToAdd); 
        createOptionListItem(optionToAdd);  
        optionInput.value = ''; 
   
}
