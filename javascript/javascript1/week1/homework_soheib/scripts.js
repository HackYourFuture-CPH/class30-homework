const birthYearInput = document.getElementById("birthYear");
const futureYearInput = document.getElementById("futureYear");
const targetInputContainer = document.querySelector('.ageIfy');
const calculatebtn = document.getElementById("calculate");

function ageIfy() {
    
    const yearOfBirth = parseInt(birthYearInput.value);
    const yearFuture = parseInt(futureYearInput.value);

    
    if (isNaN(yearOfBirth) || isNaN(yearFuture)) {
        alert("Please enter valid years.");
        return;
    }

    
    const age = yearFuture - yearOfBirth;
    const HTMLString = `<p class="result">You will be ${age} years old in ${yearFuture}</p>
    <button class="btn" id="clear">Clear results</button>`;

    
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);

    const clearbtn = document.getElementById("clear");
    clearbtn.addEventListener("click", clearResults);
}
function clearResults (){
    const resultElement = document.querySelector('.result');
    if (resultElement) {
        resultElement.remove(); 
    }
    const clearButton = document.getElementById("clear");
    if (clearButton) {
        clearButton.remove();
    }
    birthYearInput.value = "";
    futureYearInput.value = "";
}

calculatebtn.addEventListener("click", ageIfy);