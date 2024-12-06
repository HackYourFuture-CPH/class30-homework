let theirName = undefined;
let todoList = [];



function saveName(command){
    let name = command.split(" ")[4];
    theirName = name;
    return(`Nice to meet you${theirName}`);
}


function getName(){
    if(theirName){
        return (`You name is ${theirName}`);
    }else {
        return ("Who are You ahahhha");
    }
}


function addTodoList(command){
    let todo = command.slice(4, command.indexOf("to my todo"));
    todoList.push(todo);
    console.log( `${todo} added to you todo`);
}


function removeFromTodoList(command){
    let todo = command.slice(7, command.indexOf("from my todo"));
    if (todoList.includes(todo)){
        todoList.splice(todoList.indexOf(todo),1);
        return `I have removed ${todo} from you todo list`;

    }else {
        return `${todo} doesnt exist in your todo list`;
    }
}


function showOnTodoList(){
    if(todoList.length === 0){
        return("your todo list is empty");
    }else{
        console.log(`You have ${todoList.length} things to do ${todoList.join(",")}` )
    }
}

function todaysDate(){
    let day = new Date();
    let today = day.getDate();
    let monthNames = ["January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];
    let month = monthNames[day.getMonth()];
    let year = day.getFullYear();

    return `${today} ${month} ${year}`
}


function calcMath(command){
    let num1 = parseFloat(command.split(" ")[2]);
    let operator = command.split(" ")[3];
    let num2 = parseFloat(command.split(" ")[4]);


    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Im not able to solve that.";
    }
}



function setTimer(command) {
    let minutes = parseInt(command.split(" ")[4]);

    if (!minutes) {
        return "add valid number of minutes!";
    }

    setTimeout(() => {
        console.log("timer done!");
    }, minutes * 60000); 

    return `Timer set for ${minutes} minutes.`;
}








function getReply(command){
        if(command.startsWith("Hi my name is")){
            return saveName(command);
        }


        if(command == "What is my name?") {
            return getName();
        }

        if(command.startsWith("add") && command.endsWith("to my todo")){
            return addTodoList(command);
        }else if(command.startsWith("remove") && command.endsWith("from my todo")){
            return removeFromTodoList(command);
        }else if(command === "what is on my todo?") {
            return showOnTodoList();
        }

        if(command === "What day is it today?"){
            return todaysDate();
        }

        if (command.startsWith("what is")) {
            return `The answer is ${calcMath(command)}`;
        }
       
        if(command.startsWith("set a timer for")) {
            return setTimer(command);
        }

        return "Im not advanced enough to answer this."
}
