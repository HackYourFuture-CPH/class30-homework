

document.addEventListener('DOMContentLoaded', function() {
    const addQuestionForm = document.getElementById('add-question-form');
    const addOptionsForm = document.getElementById('add-options-form');
    const questionsContainer = document.getElementById('questionsContainer');
    const searchInput = document.getElementById('search');
    const startGameButton = document.getElementById('startYourGame');



    let questions = JSON.parse(localStorage.getItem('questions')) || [];

    //local store//
    function saveQuestions() {
    
        localStorage.setItem('questions', JSON.stringify(questions));    
        const player1Name = document.getElementById('player1-name').value.trim()|| "Player 1";
        const player2Name = document.getElementById('player2-name').value.trim()|| "Player 2";
        localStorage.setItem('player1Name', player1Name);
        localStorage.setItem('player2Name', player2Name);
 

          }


        
    // display questions
    function renderQuestions(filter = '') {
        questionsContainer.innerHTML = '<h2>All your Questions</h2>';
        const filteredQuestions = questions.filter(q => q.question.toLowerCase().includes(filter.toLowerCase()));

        if (filteredQuestions.length === 0) {
            questionsContainer.innerHTML += '<p>Not questions found.</p>';
            return;
        }

        filteredQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question-item');
            questionDiv.innerHTML = `
                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                
                <button class="delete-button" data-index="${index}">Delete</button>`;
            
            questionsContainer.appendChild(questionDiv);
        });

        // delete buttons event
        const deleteButtons = document.querySelectorAll('.delete-button');
       
        deleteButtons.forEach(button => {
            button.addEventListener('click', deleteQuestion);
            
        });
    }

    // delate specific question
    function deleteQuestion(e) {
        const index = e.target.getAttribute('data-index');
        const confirmDelete = confirm('Are you sure?');
        if (confirmDelete) {
            questions.splice(index, 1);
            saveQuestions();
            renderQuestions(searchInput.value);
        }
    }

    // reset all questions
    function resetQuestions() {
        const confirmReset = confirm('Are you sure?');
        if (confirmReset) {
            questions = [];
            saveQuestions();
            renderQuestions();
        }
    }

    // add options form event
    addOptionsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const questionText = document.getElementById('question').value.trim();
        const answer1 = document.getElementById('answer1').value.trim();
        const answer2 = document.getElementById('answer2').value.trim();
        const answer3 = document.getElementById('answer3').value.trim();
        const answer4 = document.getElementById('answer4').value.trim();
        const correctRadio = document.querySelector('input[name="correctAnswer"]:checked');

        // check if all fields are filled
        if (!questionText || !answer1 || !answer2 || !answer3 || !answer4 || !correctRadio) {
            alert('Please fill out all fields.');
            return;
        }

        const correctAnswer = correctRadio.value;

        const newQuestion = {
            question: questionText,
            answers: [answer1, answer2, answer3, answer4], // CALL FROM HERE 
            correctAnswer: correctAnswer
        };

        questions.push(newQuestion);
        saveQuestions();
        renderQuestions();

     // Reset forms
        addQuestionForm.reset();
        addOptionsForm.reset();
    });

    // filter questions event
    searchInput.addEventListener('input', function(e) {
        renderQuestions(e.target.value);
    });

    // start game button 
    startGameButton.addEventListener('click', function() {
        const player1Name = document.getElementById('player1-name').value.trim();
        const player2Name = document.getElementById('player2-name').value.trim();

        if (player1Name && player2Name && questions.length > 0) {
            localStorage.setItem('player1', player1Name);
            localStorage.setItem('player2', player2Name);
            window.location.href = 'game.html'; //sent to game.html
        } else {
            alert('Please fill out all fields and add questions.');
        }
    });




    // Render questions on load
    renderQuestions();
});
