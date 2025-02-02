
document.addEventListener('DOMContentLoaded', () => {

    const questionElement = document.getElementById('question');
    const optionButtons = document.getElementById('option-buttons');
    const nextButton = document.getElementById('next-btn');
    const timerElement = document.getElementById('timer');
    const player1NameDisplay = document.getElementById('player1-name-display');
    const player2NameDisplay = document.getElementById('player2-name-display');



    const player1ScoreElement = document.querySelector('#player1 .score');
    const player2ScoreElement = document.querySelector('#player2 .score');

    const player1Name = localStorage.getItem('player1Name') || "Player 1";
    const player2Name = localStorage.getItem('player2Name') || "Player 2";
    player1NameDisplay.textContent = player1Name;
    player2NameDisplay.textContent = player2Name;

    // Variables 
    let currentQuestionIndex = 0;
    let questions = [];

    let player1Score = 0;
    let player2Score = 0;
    let time = 10;
    let interval;

    function getQuestionsFromLocalStorage() {
        const storedQuestions = localStorage.getItem('questions');
        if (storedQuestions) {
            questions = JSON.parse(storedQuestions);
            startGame();
        } else {
            questionElement.innerText = 'No Questions found.';
        }

    }

    function startGame() {
        currentQuestionIndex = 0;
        player1Score = 0;
        player2Score = 0;
        updateScores();
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();

        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            startTimer();
        }
    }

    function showQuestion(question) {
        let currentQuestion = questions[currentQuestionIndex];
        let questionId = currentQuestionIndex + 1;
        questionElement.innerHTML = questionId + ". " + currentQuestion.question; const button = document.createElement('button');

        question.answers.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(index));
            optionButtons.appendChild(button);

        });

    }

    function selectAnswer(selectedIndex) {

        const correct = questions[currentQuestionIndex].correctAnswer === selectedIndex;
        const buttons = optionButtons.children;


        //I tried to add a class to the selected button but it didn't work so i add my 2 options below//
        buttons[selectedIndex].classList.add(correct ? 'correct' : 'incorrect');

        if (correct) {
            selectedIndex.classList.add('correct');
        } else {
            selectedIndex.classList.add('incorrect');
        }





        //disable button after click//
        Array.from(buttons).forEach(button => {
            button.disabled = true;
        });


        updateScores();
        nextButton.style.display = 'block';
        clearInterval(interval);


        setNextQuestion();
    }

    function resetState() {
        clearInterval(interval);
        nextButton.style.display = 'none';
        while (optionButtons.firstChild) {
            optionButtons.removeChild(optionButtons.firstChild);
        }
    }

    function startTimer() {
        time = 10;
        timerElement.textContent = time;
        interval = setInterval(() => {
            time--;
            timerElement.textContent = time;
            if (time <= 0) {
                clearInterval(interval);
                setNextQuestion();
            }
        }, 1000);

    }

    function updateScores() {
        player1ScoreElement.value = player1Score;
        player2ScoreElement.value = player2Score;
    }



    // Event Listeners
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();

    });

    document.getElementById('player1-correct-btn').addEventListener('click', () => {
        if (player1Score < 10) player1Score++;
        updateScores();
    });

    document.getElementById('player1-wrong-btn').addEventListener('click', () => {
        if (player1Score > 0) player1Score--;
        updateScores();
    });

    document.getElementById('player2-correct-btn').addEventListener('click', () => {
        if (player2Score < 10) player2Score++;
        updateScores();
    });

    document.getElementById('player2-wrong-btn').addEventListener('click', () => {
        if (player2Score > 0) player2Score--;
        updateScores();





    });

    getQuestionsFromLocalStorage();

});