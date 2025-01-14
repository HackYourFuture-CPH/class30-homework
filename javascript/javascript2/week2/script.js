const questions = [
 
        {
          
            question: "Which country has the highest life expectancy?",
            options: [
               
                { text: "Spain",isCorrect: false},
                { text: "Denmark",isCorrect: false},
                { text: "Hong Kong",isCorrect: true},
                { text: "China",isCorrect: false},
            
            ]
        },
        {
    
            question: "What phone company produced the 1100?",
            options: [
                { text: "Nokia",isCorrect: true},
                { text: "Apple",isCorrect: false},
                { text: "Motorola",isCorrect: false},
                { text: "Samsung",isCorrect: false},
            ]
                
    
        },
        {
        
            question: "What is the capital of Ireland?",
            options: [
                {  text: "Dublina",isCorrect: false},
                {  text: "Dublin",isCorrect: true},
                {  text: "Cork",isCorrect: false},
                {  text: "Belfast",isCorrect: false},
            ]

        },
        {
         
            question: "How many bones do we have in an ear?",
            options: [
                { text: "5",isCorrect: false},
                { text: "2",isCorrect: false},
                { text: "we don't have",isCorrect: false},
                { text: "3",isCorrect: true},
         
            ]

        },
        {
    
            question: "What is the scientific theory that explains the origin of the universe?",
            options: [
                { text: "The Origin theory",isCorrect: false},
                { text: "The Steady State Theory",isCorrect: false},
                { text: "The Multiverse Theory",isCorrect: false},
                { text: "The Big Bang Theory",isCorrect: true},
    
            ]

        }
    ];

//DOM elements//

const questionElement = document.getElementById("question");
const optionButton = document.getElementById("option-buttons");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

//start from 0//
let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
 
//show the questions//
function showQuestion(){
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
    button.addEventListener("click",selectOption); 
    optionButton.appendChild(button);
    
         
    });
    
 }
 //correct or incorrect//
function selectOption(e){
    const selectedBtn= e.target;
    const correct = selectedBtn.dataset.isCorrect === "true";

    if (correct) {
        selectedBtn.classList.add("Correct");    
        score++;
    }else {
        selectedBtn.classList.add("Incorrect");
        score--;
    }
    //disable button after click//
    Array.from(optionButton.children).forEach(button => {
       if(button.dataset.isCorrect === "true"){
           button.classList.add("Correct");
        
       }
        button.disabled = true;
       
    });
    nextButton.style.display="block";
}


startQuiz();


 