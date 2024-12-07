let userName = "";
let userAge = -1;
let todos = [];

function getReply(command){
    if (command.startsWith("Hello my name is")) {
        const name = command.slice(17).trim();
        if (userName && userName.toLowerCase() === name.toLowerCase()) {
            return `You already told me your name is ${userName}!`;
        }
        userName = name;
        return `Nice to meet you ${userName}`;
    }

    if (command.startsWith("What is my name")) {
        if (userName === "") {
            return `Firstly add your name!`;
        }
        return `Your name is ${userName}`;
    }

    if (command.startsWith("How old I am")) {
        if (userAge === -1) {
            return `Firstly add your age!`;
        }
        return `Your age is ${userAge}`;
    }

    if (command.startsWith("My age is")) {
        if (userAge === -1) {
            const age = parseInt(command.slice(10).trim());
            if(typeof(age) !== "number" || age < 0){
                return "Incorrect age!"
            }
            userAge = age;
            return `You added your age (${userAge} y.o.)`;
        }
        return `You have already added your age`;
    }

    if (command.startsWith("Add")) {
        const task = command.slice(4, command.lastIndexOf("to my todo")).trim();
        todos.push(task);
        return `${task} added to your todo`;
    }

    if (command.startsWith("Remove")) {
        const task = command.slice(7, command.lastIndexOf("from my todo")).trim();
        const index = todos.indexOf(task);
        if (index !== -1) {
            todos.splice(index, 1);
            return `Removed ${task} from your todo`;
        }
        return `${task} is not in your todo list`;
    }

    if (command.startsWith("What is on my todo")) {
        if(todos.length < 1){
            return "Todo list is empty";
        }
        return `Your todos:\n\n${todos.join(", \n")}.\n`;
    }

    if (command.startsWith("What day is it today")) {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString("default", { month: "long" });
        const year = today.getFullYear();
        return `Today is ${day}. of ${month} ${year}`;
    }

    if (command.startsWith("What is")) {
        const mathExpression = command.slice(8).trim();
        const result = eval(mathExpression);
        return `${mathExpression} is ${result}`;
    }

    if (command.startsWith("Set a timer for")) {
        const minutes = parseInt(command.slice(16, command.indexOf("minutes")).trim(), 10);
        if (isNaN(minutes)) {
            return "Wrong time";
        }
        setTimeout(() => {
            console.log("Timer done");
        }, minutes * 60000);
        return `Timer set for ${minutes} minutes`;
    }
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add driving to my todo")); // "fishing added to your todo"
console.log(getReply("What is on my todo"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("Set a timer for 3 minutes"));
console.log(getReply("What day is it today"));
console.log(getReply("How old I am"));
console.log(getReply("My age is 20"));
console.log(getReply("How old I am"));

