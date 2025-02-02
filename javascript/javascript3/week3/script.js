//DOM elements//

document.addEventListener('DOMContentLoaded', function() {
const questionContainerElement = document.querySelector(".quiz");
const questionElement = document.getElementById("question");
const optionButton = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-btn");
const exitButton = document.getElementById("exit-btn");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");





//variables//
let currentQuestionIndex = 0;
let score = 0;
let time = 10;
let interval;



const questions = [

    {

        question: "Which country has the highest life expectancy?",
        options: [

            { text: "Spain", isCorrect: false },
            { text: "Denmark", isCorrect: false },
            { text: "Hong Kong", isCorrect: true },
            { text: "China", isCorrect: false },

        ]
    },
    {

        question: "What phone company produced the 1100?",
        options: [
            { text: "Nokia", isCorrect: true },
            { text: "Apple", isCorrect: false },
            { text: "Motorola", isCorrect: false },
            { text: "Samsung", isCorrect: false },
        ]


    },
    {

        question: "What is the capital of Ireland?",
        options: [
            { text: "Dublina", isCorrect: false },
            { text: "Dublin", isCorrect: true },
            { text: "Cork", isCorrect: false },
            { text: "Belfast", isCorrect: false },
        ]

    },
    {

        question: "How many bones do we have in an ear?",
        options: [
            { text: "5", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "we don't have", isCorrect: false },
            { text: "3", isCorrect: true },

        ]

    },
    {

        question: "What is the scientific theory that explains the origin of the universe?",
        options: [
            { text: "The Origin theory", isCorrect: false },
            { text: "The Steady State Theory", isCorrect: false },
            { text: "The Multiverse Theory", isCorrect: false },
            { text: "The Big Bang Theory", isCorrect: true },

        ]

    },
    {
        question: "Which CONTINENT is the most linguistically diverse in the world?",
        options: [
            { text: "South America", isCorrect: false },
            { text: "Asian", isCorrect: false },
            { text: "Europe", isCorrect: false },
            { text: "African", isCorrect: true },
        ]
    },
    {
        question: "Which country has the most natural lakes?",
        options: [
            { text: "Canada", isCorrect: true },
            { text: "Colombia", isCorrect: false },
            { text: "Spain", isCorrect: false },
            { text: "Norway", isCorrect: false },
        ]
    },
    {
        question: "How much pieces of pizza do Americans eat each day?",
        options: [
            { text: "10", isCorrect: false },
            { text: "500", isCorrect: false },
            { text: "250", isCorrect: false },
            { text: "100", isCorrect: true },
        ]
    },
    {
        question: "Cinco De Mayo and Día de Muertos are both celebrated in which country?",
        options: [
            { text: "Argentina", isCorrect: false },
            { text: "Nepal", isCorrect: false },
            { text: "Mexico", isCorrect: true },
            { text: "Spain", isCorrect: false },
        ]
    },
    {
        question: "In which country do they dye their Easter eggs red?",
        options: [
            { text: "Austria", isCorrect: false },
            { text: "Greece", isCorrect: true },
            { text: "Dubai", isCorrect: false },
            { text: "Denmark", isCorrect: false },
        ]
    },



];

//start the quiz//

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    resetState();
    nextButton.innerHTML = "Next";
    nextButton.style.backgroundColor = "";


    //shuffle the questions//
    questions.sort(() => Math.random() - .5);

    //shuffle options - No working yet //
    questions.forEach(question => {
        question.options.sort(() => Math.random() - 0.5);
    });

    questionContainerElement.classList.remove("hide");
    nextButton.addEventListener("click", setNextQuestion);
    startTimer();
    showQuestion();

}


//show the questions//
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionId = currentQuestionIndex + 1;
    questionElement.innerHTML = questionId + ". " + currentQuestion.question;

    optionButton.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option.text; // Access option value dynamically
        button.classList.add("btn");

        //click option//
        button.dataset.isCorrect = option.isCorrect;
        button.addEventListener("click", selectOption);
        optionButton.appendChild(button);


    });

}
//correct or incorrect//
function selectOption(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.isCorrect === "true";

    if (correct) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");

    }
    //disable button after click//
    Array.from(optionButton.children).forEach(button => {
        if (button.dataset.isCorrect === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", setNextQuestion);


//next button//
function setNextQuestion() {
    resetState();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else if (currentQuestionIndex === questions.length) {
        questionElement.innerHTML = "Your score is " + score + " out of " + questions.length;
        optionButton.innerHTML = "";
                nextButton.innerHTML = "restart";
                nextButton.style.backgroundColor = "#4CAF50";
                nextButton.removeEventListener("click", setNextQuestion);
                nextButton.removeEventListener("click", startQuiz);
                nextButton.addEventListener("click", startQuiz);//restart the quiz//
                nextButton.style.display = "block";
            
                
            }

           startTimer();

}



function resetState() {
    clearInterval(interval);
    nextButton.classList.add("hide");
    nextButton.style.display = "none";
    nextButton.innerHTML = "Next";


    while (optionButton.firstChild) {
        optionButton.removeChild(optionButton.firstChild);

    }

}

function startTimer() {
    time = 10;
    clearInterval(interval);
    timerElement.textContent = time;
    interval = setInterval(() => {
        time--;
        timerElement.textContent = time;
        if (time <= 0) {
            console.log("Time is up");
            clearInterval(interval);
            setNextQuestion();
        }
      
    }, 1000);

}

startQuiz();

});
