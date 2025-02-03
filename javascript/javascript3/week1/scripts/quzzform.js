

let amountToExport = null;

document.addEventListener("DOMContentLoaded", function () {
   createMainContainer()
   const button = document.querySelector('#saveAmount');
    button.addEventListener("click", (e) => {
    amountToExport = document.querySelector('#amount').value;
    const url = `quizitems.html?amount=${amountToExport}`
    button.href = url
    window.location.href= url 
    })

})

function createMainContainer(){

    const body = document.body
    const main = document.createElement('main')
    const section = document.createElement('section')

    const title = document.createElement('h1')
    title.textContent = "Quizz Maker"

    const question = document.createElement('p')
    question.textContent = "How many quizz do you like to generate?"
    
    const label = document.createElement('label')
    label.for = "amount"
    label.textContent = "Enter a number ( 1 to 10)"

    const amount = document.createElement('input')
    amount.type = "number"
    amount.min = 1
    amount.max = 10;
    amount.required = true;
    amount.id = 'amount'

    const button = document.createElement('a')
    button.id = "saveAmount"
    button.type = "button"
    button.className = "button"
    button.textContent = "Save"


    section.appendChild(title)
    section.appendChild(question)
    section.appendChild(label)
    section.appendChild(document.createElement('br'))
    section.appendChild(amount)
    section.appendChild(document.createElement('br'))
    section.appendChild(button)
    main.appendChild(section)
    body.appendChild(main)
}


export {amountToExport}