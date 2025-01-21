
const body = document.body
const allQuiz = JSON.parse(localStorage.getItem('allItem'))
console.log(allQuiz)


createQuizContainer()
getInputData()


function createContainerDiv() {
    const containerDiv = document.createElement("div");
    containerDiv.id = "form-container";
    containerDiv.className = "container";
    document.body.appendChild(containerDiv);
    return containerDiv;
  }
  function createFormParent() {
    const formParent = document.createElement("div");
    formParent.className = "form-items";
    
    return formParent;
  }
  
  function createForm() {
    const formElement = document.createElement("form");
    formElement.className = "quiz-form";
    return formElement;
  }
  function getInputData(){
    const buttons = document.querySelectorAll('button')
    
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            e.preventDefault()

            const parentDiv =  e.target.parentElement;
            keepData(parentDiv)
            
        })
    })
  }
  function keepData(form){
    const formData = new FormData(form)
    const questionTextExtracted = form.querySelector('.quizQuestion')
    let qustionElement = questionTextExtracted.textContent
    while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
      const answerText = document.createElement('p')
      answerText.textContent = "The chosen answer is "
      const answerChosen = document.createElement('strong')
    answerChosen.className = "answerChosen"
    let answerAndResult;
      
      formData.forEach((key, value) => {
        console.log(`Key is ${key} and value is ${value}`)
        answerChosen.textContent = key
       answerAndResult= getCurrectAnswer(key, qustionElement)
        console.log("This is the return items: ", getCurrectAnswer(key, qustionElement))

        
    })
    answerText.appendChild(answerChosen)
    const correcText = document.createElement('p')
    
    if(answerAndResult[1]){
        correcText.textContent = `You answered correct:  ${answerAndResult[0]}`
        correcText.style.background = 'green'
        correcText.style.color = 'white'
        correcText.style.padding = '10px 15px'
    }else{
        correcText.textContent = `You answered Wrong:  the correct answer is ${answerAndResult[0]}`
        correcText.style.background = 'red'
        correcText.style.color = 'white'
        correcText.style.padding = '10px 15px'
    }
   
    
    answerText.appendChild(correcText)

  
    
    form.appendChild(answerText)
  }
  function getCurrectAnswer(chosenAnswer, questionGiven){
     
      let arrayOfReturns = ["", false]
    allQuiz.forEach(element => {
            if(element.question === questionGiven){
                arrayOfReturns[0] = element.correctAnswer
                if(element.correctAnswer === chosenAnswer){
                   
                    arrayOfReturns[1] = true
                    console.log(`You Answered Right: ${arrayOfReturns}`)
                    return arrayOfReturns
                }
                else{
                    console.log(`wrong answer the correct anser is ${element.correctAnswer}`)
                    return arrayOfReturns
                }
            }

       
    });
    return arrayOfReturns
    

  }
 
  function createQuizContainer() {
    let num = 1
    const containerDiv = createContainerDiv();

    for (let quiz of allQuiz) {
      const quizDiv = createFormParent();
      const divContainer = document.createElement('div')
      const topOfTitle = document.createElement('h4')

      topOfTitle.textContent = `Question - ${num}`


      const questionLabel = document.createElement("h2");
      questionLabel.textContent = quiz.question;
      questionLabel.className = 'quizQuestion'
      topOfTitle.className = "questionNumber"
      divContainer.appendChild(topOfTitle)
      const formContainer = createForm();
      const quizLabelId = document.createElement('label')
      quizLabelId.className = "quizLabelID"
      formContainer.appendChild(questionLabel);
    

      
      for (let option of quiz.options) {
        
        const optionLabel = document.createElement("label");
        optionLabel.appendChild(document.createElement("br"));
        optionLabel.textContent = option
        optionLabel.setAttribute('for', `option-${option}`)
        const optionRadioButton = document.createElement("input");
        optionRadioButton.setAttribute("type", "radio");
        optionRadioButton.setAttribute("name", `option-${option}`);
        optionRadioButton.id = `option-${option}`
        optionRadioButton.value = option;
        optionRadioButton.className = `radioOptions`;
        optionLabel.appendChild(optionRadioButton);
        
        formContainer.appendChild(optionLabel);
       
      }
      const submitButton = document.createElement("button");
      submitButton.innerText = "Submit";
      submitButton.type = 'button'
      formContainer.appendChild(submitButton);
      divContainer.appendChild(formContainer)
      quizDiv.appendChild(divContainer);
      quizDiv.appendChild(document.createElement("br"));
      containerDiv.appendChild(quizDiv);
      num+= 1
    }
    

  }
  