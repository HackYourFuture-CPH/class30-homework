let todos = []; // initializing an empty list of todo
let loggedName = []; //initializing an empty list of names

//function to capture the name from the command
function getName(command){
    const name = command.split(' ')[4]; // note to self, split is a string method, it takes a separtor argument, in this case it's a space, and returns an array populated with the separeted elements as strings, I am accessing the 5th element directly
    return name
}

//function to capture a task, either to add or remove
function getTask(command) {
    if(command.startsWith('Add') || command.startsWith('add')){
    const endIndex = command.indexOf(' to my todo') // I plan on using slice later, so I'm getting the index at which the slice should stop
    const task = command.slice(4, endIndex) // get the part of the string between "Add" and "to my todo"
    return task}
    //do the same thing except adjust for the words "from" and "Remove"
    else if (command.startsWith('Remove') || command.startsWith('remove')){
    const endIndex = command.indexOf(' from my todo') 
    const task = command.slice(7, endIndex) 
    return task
    }
}

//function to remove a task from the todos
function removeTask(task) {
    const taskIndex = todos.findIndex(task);
    todos.slice(taskIndex, 1)
    return console.log(`Removed ${task} from your todo`)
}

// function print date in human redable format
function getDate(){
    const today = new Date();
    const month = today.getMonth(); 
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return console.log(`Today is the ${today.getDate()}. of ${months[month]} ${today.getFullYear()}`)
}

// function for timer 
function timer(command) {
    function getInterval(command){
        const regex = /(\d+)/ //regular expression to find digits in the command str
        const match = command.match(regex) // this method will return an array with matching values to the regex 
        return match ? Number(match[0]) : null; // if true convert the regex to a number and return it
    }
    const number = getInterval(command)
    const interval = number * 60 * 1000;
    function logDone(){
        console.log(`Timer Done`)
    }
    setTimeout(logDone, interval)
    console.log(`A timer for ${number} minute(s) has been set`)
}



//main function to get answers from the "voice assistant"
function getReply(command) {
    // here we deal with the greeting commands
    if (command.startsWith('Hello my name is')){
        const person = getName(command)
        if (!loggedName.includes(person)) {
            loggedName.push(person)
            return console.log(`Nice to meet you ${person}`)
        } else if (loggedName.includes(person)) {
            return console.log(`Hey ${person}! we met already.`)
        }
    }
    // here we deal with reminding the user their name
    else if (command.startsWith('What is my name')) {
        if (loggedName.length === 0) {
            return console.log(`I can't find a name. \n Please introduce yourself in this way: "Hello my name is" followed by your name`)
        } else if (loggedName.length > 0) {
            const recentName = loggedName[loggedName.length -1]
            return console.log(`Your name is ${recentName}! What can I help you with, ${recentName}?`)
        }
    }
    //dealing with the todo part
    else if (command.includes('my todo')) {
        let newTask = getTask(command);
        //adding a task
        if(command.startsWith('Add') || command.startsWith('add')){
           todos.push(newTask); 
           return console.log(`${newTask} has been added to your todos`)
        
        } 
        //removing a task
        else if (command.startsWith('Remove') || command.startsWith('remove')){
            const taskIndex = todos.indexOf(newTask);
            todos.splice(taskIndex, 1)
            return console.log(`${newTask} has been removed from your todos`)
        }
        // showing all task 
        else if (command.startsWith('What is on my todo?')){
            if (todos.length === 0) {
                console.log(`Your list is empty, try adding some tasks first`)
            } else {
                console.log(`Your todo list is comprised of: \n${todos.join('\n')}`)
            }
        }
    }
    // dealing with the date 
    else if (command.startsWith('What day is it today?') || command.startsWith('What day is it') ) {
       return getDate()
    }
    // dealing with math operations
    else if ( command.startsWith('What is') && (/[+\-*/]/.test(command))){ //apparently .includes does not work with regex, so instead you se .test
        const operation = command.slice(7)
        return eval(operation)
    }
    // setting a timer 
    else if ( command.startsWith('Set a timer')) {
        return timer(command)
    }
    //additional feature
    else if ( command.startsWith('Guess my age')){
        const age = Math.floor(Math.random() * 100)
        if(age< 5 ) {
        return console.log(`I think you're ${age}. You're a widdle baby :D \n You disagree? let me take another guess!`)
        } else if (age > 5 && age < 16) {
        return console.log(`I think you're ${age}. You must be a young person, do your parents consent to you doing this? \n You disagree? let me take another guess!`)  
        } else if (age > 15 && age < 40) {
        return console.log(`I think you're ${age}. Enjoy your youth, the spring of life. \n You disagree? let me take another guess!`)   
        } else if (age > 39 && age < 65) {
        return console.log(`I think you're ${age}. A grown person with a lot of wisdom to share, and a lot of life ahead. \n You disagree? let me take another guess!`)
        } else if (age > 64 && age < 90) {
        return console.log(`I think you're ${age}. So much wisdom, so much life, so many stories, do you care to share?. \n You disagree? let me take another guess!`)  
        } else if (age > 89) {
        return console.log(`I think you're ${age}. I am really impressed you can this :D \n I will not cite the Deep Magic to you, you were there when it was written!! . \n You disagree? let me take another guess!`)  
        }
        
    }
}