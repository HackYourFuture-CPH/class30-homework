
function getReply(comand){
    // name
    let sentence = 'Hello, my name is Benjamin.';
    let parts = sentence.split(" ");
    let name = parts.slice(4).join(" ");

    // To do list
    let list=[];
    let toDoList='Add fishing to my todo';
    let parts2 = toDoList.split(" ");
    let toDo = parts2.slice(1,2).join(" ");
    list.push(toDo);

    // Making to do list
    let addToDoList='Add singing in the shower to my todo';
    let parts3 = addToDoList.split(" ");
    let addToDo = parts3.slice(1,5).join(" ");
    list.push(addToDo);
    
    // Date
    let today = new Date();
    let humanReadable = today.toDateString();

    // Math
    let toDoMath = "What is 3+3";
    let parts4 = toDoMath.split(" ");
    let expression= parts4.slice(2).join(" ");
    let result = eval(expression);

    // Timer
    let setTimer='Set a timer for 4 minutes'
    let parts5 = setTimer.split(" ");
    let timer= parts5.slice(4).join(" ");
    let minutes = parseInt(timer);
    setTimeout(function() {
        console.log("Timer done");
    }, minutes * 60000);

    // Time
    let currentTime = new Date().toLocaleTimeString();

    if (comand.toLowerCase() === 'Hello, my name is Benjamin.') {
        return `Nice to meet you, ${name}`;
    } 
    
    else if (comand.toLowerCase() === 'What is my name?') {
        return `Your name is ${name}`;
    }
    
    else if (comand.toLowerCase() === 'Add fishing to my todo') {
    return `${toDo} added to your todo.` ;
}

else if (comand.toLowerCase() === 'Add singing in the shower to my todo') {
    return list ;
}

else if (comand.toLowerCase() === 'Remove fishing from my todo') {
    return `Removed ${toDo} from your todo.` ;
}

else if (comand.toLowerCase() === 'What is on my todo?') {
    return list ;
}

else if (comand.toLowerCase() === 'What day is it today?') {
    return humanReadable;
}

else if (comand.toLowerCase() ==='What is 3+3'){
    return result;
}

else if (comand.toLowerCase() === 'set a timer for 4 miutes') {
    return `Timer set for ${timer}.` ;
}
else (comand.toLowerCase() === "what time is it?") {
    return `The current time is ${currentTime}.`;
}
 
}

console.log(getReply('Hello, my name is Benjamin.'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3+3'));
console.log(getReply('set a timer for 4 miutes'));