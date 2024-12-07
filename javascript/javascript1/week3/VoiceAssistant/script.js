let userName; 
let todos = [];

function getReply(command) {

    // HELLO MY NAME IS HELLO MY NAME IS
    // HELLO MY NAME IS HELLO MY NAME IS
    // HELLO MY NAME IS HELLO MY NAME IS

    if (command.includes("Hello my name is")) {
        let words = command.split(" "); 
        userName = words[4]; 
        return "Nice to meet you " + userName;
    }

    // WHAT IS MY NAME WHAT IS MY NAME
    // WHAT IS MY NAME WHAT IS MY NAME
    // WHAT IS MY NAME WHAT IS MY NAME

    if (command.includes("What is my name")) {
        if (userName) {
            return "Your name is " + userName;
        } else {
            return ("I don't know what is your name.");
        }
    }

    // ADD TASK ADD TASK ADD TASK ADD TASK
    // ADD TASK ADD TASK ADD TASK ADD TASK
    // ADD TASK ADD TASK ADD TASK ADD TASK

    if (command.includes("Add fishing to my todo")) {
        let task = command.split(" ").slice(1, -3).join(" ");
        todos.push(task);

        return "Added " + task + " to your todo";
    }

    // DELETE TASK DELETE TASK DELETE TASK
    // DELETE TASK DELETE TASK DELETE TASK
    // DELETE TASK DELETE TASK DELETE TASK

    if (command.includes("Delete")) {
        let task = command.split(" ").slice(1, -3).join(" "); 

        if (todos.includes(task)) {
            let deleteTask = todos.indexOf(task);
            todos.splice(deleteTask, 1);
            return "Removed " + task + " from your todo";
        } else {
            return "That task is not in the list";
        }
    }

    // CHECK TO DO CHECK TO DO CHECK TO DO
    // CHECK TO DO CHECK TO DO CHECK TO DO
    // CHECK TO DO CHECK TO DO CHECK TO DO

    if (command.includes("What is on my todo?")) {
        if (todos.length > 0) {
            return "You have " + todos.length + " tasks: " + todos.join(", ");
        } else {
            return "You have no tasks yet";
        }
    }

    // DATE DATE DATE DATE DATE DATE
    // DATE DATE DATE DATE DATE DATE
    // DATE DATE DATE DATE DATE DATE

    if (command.includes("What day is it today?")) {
        const nameDays = [
            "January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        let today = new Date();
        let todayDate = today.getDate();
        let todayMonth = today.getMonth();
        let todayYear = today.getFullYear();

        let monthName = nameDays[todayMonth];

        return ("Today is " + todayDate + " of " + monthName + " of " + todayYear);
    }

    // OPERATIONS OPERATIONS OPERATIONS
    // OPERATIONS OPERATIONS OPERATIONS
    // OPERATIONS OPERATIONS OPERATIONS

    let parts = command.split(" ");
    let num1 = parseFloat(parts[0]);
    let num2 = parseFloat(parts[2]);
    let operator = parts[1];

    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else if (operator === "%") {
        return num1 % num2;
    } else {
        return "What is that operator?";
    }

    // TIMER TIMER TIMER TIMER TIMER
    // TIMER TIMER TIMER TIMER TIMER
    // TIMER TIMER TIMER TIMER TIMER

    if (command.includes("Set a timer for")) {
        let words = command.split(" ");
        let timer = words[4]; 
        let timeLeft = parseInt(timer) * 60000; 
    
        setTimeout(() => {
            console.log("Timer Done");
        }, timeLeft);
    
        return "Timer set for " + timer + " minutes.";
    }
}

// Para probar las respuestas
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("Set a timer for 4"));
