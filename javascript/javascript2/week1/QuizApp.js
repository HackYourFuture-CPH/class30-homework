const quizForm = document.getElementById('quiz-form');


function randomizeOptions() {
    
    const optionsDivs = [
        document.getElementById('optionA').parentElement,
        document.getElementById('optionB').parentElement,
        document.getElementById('optionC').parentElement,
        document.getElementById('optionD').parentElement
    ];

    if (optionsDivs.includes(null)) {
        console.error("One of the desired option divs was not found. Check your input fields and IDs.");
        return; 
    }

    for (let i = optionsDivs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const parent = optionsDivs[i].parentNode;
        const option = optionsDivs[i];
        parent.insertBefore(option, optionsDivs[j]);
    }
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const question = document.getElementById('question').value;
    const options = [
        { text: document.getElementById('optionA').value, isCorrect: document.querySelector('input[name="correct"][value="1"]').checked },
        { text: document.getElementById('optionB').value, isCorrect: document.querySelector('input[name="correct"][value="2"]').checked },
        { text: document.getElementById('optionC').value, isCorrect: document.querySelector('input[name="correct"][value="3"]').checked },
        { text: document.getElementById('optionD').value, isCorrect: document.querySelector('input[name="correct"][value="4"]').checked }
    ];

    const quizQuestion = {
        question: question,
        options: options
    };

    console.log(quizQuestion);
});

document.getElementById('randomize-btn').addEventListener('click', randomizeOptions);

