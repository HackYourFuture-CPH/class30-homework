const buttonToOne = document.getElementById("to-oneplayer");
buttonToOne.addEventListener("click", () => {
  window.location.href = "onePlayer.html";
});

const buttonToMulti = document.querySelector("#to-multiplayer");
buttonToMulti.addEventListener("click", () => {
  window.location.href = "multiPlayer.html";
});

document.querySelector("#to-quiz").addEventListener("click", () => {
  window.location.href = "quizzForm.html";
});


const title = "Game Mode";
const toQuiz = "ToQuizCreator";
const quizCreator = document.querySelector("#to-quiz");
const titleContainer = document.querySelector("#title-elements");
const items = quizCreator.querySelectorAll('p')

function elementGenerator(str, parentDiv) {
  for (let index = 0; index < str.length; index++) {
    const item = str[index];
    const element = document.createElement("p");
    element.textContent = item;
    parentDiv.appendChild(element);
  }
}
function generateImageContainer() {
  for (let i = 0; i <= 3; i++) {
    const image = document.createElement("img");
    image.src = "./images/right-arrow.png";
    image.id = `image${i}`
    image.style.position = "absolute"
    
    for(const item of items){
      quizCreator.removeChild(item)
    }
    quizCreator.appendChild(image)
  }
}

elementGenerator(title, titleContainer);

elementGenerator(toQuiz, quizCreator);

  generateImageContainer()
