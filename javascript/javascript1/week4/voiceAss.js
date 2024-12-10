// Global variables for persistence
let myName = '';
let list = [];

function getReply(command){
    // name
    if (command.startsWith("Hello, my name is")) {
      let parts= command.split(" "); 
     myName = parts.slice(4).join("");
    return `Nice to meet you, ${myName}`;
    }

    if (command === "What is my name?") {
        if(myName){
        return `Your name is ${myName}`
    } else{
        return "I don't know your name yet."}
    }

    // Add do list
    if (command.startsWith('Add') && command.includes('to my todo')) {
        let parts2 = command.split(" ");
        let todo = parts2.slice(1,-3).join(" ");
        list.push(todo);
        return `${todo} added to your todo.` ;
    }
    
    //Remove from to do list
    if (command.startsWith("Remove") && command.includes("from my todo")) {
        let parts3= command.split(" ");
        let todo= parts3.slice(1,-3).join(" ");
        let index=list.indexOf(todo);
        if (index > -1) {
            list.splice(index, 1);
            return `${todo} removed from your todo.`;
        } else {
            return `${todo} is not in your todo.`;
        }
    }

    // To do list
    if (command === "What is on my todo?") {
    return `Your todo list: ${list.join(", ")}`;
    }

    // Date
    if (command === "What day is it today?") {
        let today = new Date();
        let humanReadable = today.toDateString();
        return  humanReadable;
        
    }

    // Math

    if (command.startsWith("What is") && command.includes("+")){
    let parts4 = command.split(" ");
    let expression= parts4.slice(2).join(" ");
    let result = eval(expression);
        return result;
    }

    // Timer
    if (command.startsWith("Set a timer for")) {
        let parts5 = command.split(" ");
    let timer= parts5.slice(4).join(" ");
    let minutes = parseInt(timer);
    setTimeout(function() {
        console.log("Timer done");
    }, minutes * 60000);
        return `Timer set for ${timer}.` ;
    }

    // Time
    if (command === 'What time is it?') {
        let currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    }

    return "I don't understand that command.";
}

console.log(getReply('Hello, my name is Parisa.'));
console.log(getReply('What is my name?'));
console.log(getReply('Add diving to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove cyceling from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 5+6'));
console.log(getReply('Set a timer for 7 minutes'));
console.log(getReply('What time is it?'));