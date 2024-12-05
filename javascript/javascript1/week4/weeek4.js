
let name = "";
let todos=[];

function getReply(command) {
  
  if (command.includes("Hello my name is")) {
    let newName = command.split("Hello my name is ")[1]; 
    if (newName === name) {
      return `You've already introduced yourself as ${name}`;
    }
    name = newName;
    return `Nice to meet you ${name}`;
  }

  
  if (command.includes("What is my name")) {
    if (name) {
      return `Your name is ${name}`;
    } else {
      return "I don't know your name yet.";
    }
  }
  
if (command.includes("Add") && command.includes("to my todo")) {
    let todoItem = command.split("Add ")[1].split(" to my todo")[0]; 
    todos.push(todoItem); 
    return `${todoItem} added to your todo`;
}

if (command.includes("Remove") && command.includes("from my todo")) {
  let todoItem = command.split("Remove ")[1].split(" from my todo")[0]; 
  let index = todos.indexOf(todoItem); 
  if (index > -1) {
    todos.splice(index, 1); 
    return `Removed ${todoItem} from your todo`;
  } else {
    return `${todoItem} is not in your todo`;
  }
}

if (command.includes("What is on my todo")) {
    if (todos.length === 0) {
      return "Your todo list is empty";
    } else {
      return `You have ${todos.length} todos: ${todos.join(", ")}`;
    }
  }
  
  if (command.includes("What day is it today")) {
    let today = new Date(); 
    let day = today.getDate(); 
    let monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    let month = monthNames[today.getMonth()]; 
    let year = today.getFullYear(); 
    return `${day}. of ${month} ${year}`; 
  }

  
if (command.includes("What is")) {
    let mathExpression = command.replace("What is", "").trim(); 
    let parts = mathExpression.split(" "); 
    let num1 = parseFloat(parts[0]); 
    let operator = parts[1]; 
    let num2 = parseFloat(parts[2]); 
  
    
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else {
      return "I can only perform +, -, *, and / operations";
    }
  }

  
  if (command.includes("Set a timer for") && command.includes("minutes")) {
    let timePart = command
      .replace("Set a timer for", "")
      .replace("minutes", "")
      .trim();
    let minutes = Number(timePart);
  
    if (!Number.isInteger(minutes) || minutes <= 0) {
      return "Please specify a valid number of minutes.";
    }
  
       setTimeout(function () {
      console.log("Timer done");
    }, minutes * 60 * 1000);
  
    return `Timer set for ${minutes} minutes.`;
  }

  
  return "I don't understand that command.";
}


console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Hello my name is Sarah")); 
console.log(getReply("What is my name?")); 
console.log(getReply("What is my age?"));
console.log(getReply("Add fishing to my todo")); 

console.log(getReply("Remove fishing from my todo")); 
console.log(getReply("Remove dancing from my todo")); 

console.log(getReply("Remove fishing from my todo")); 
console.log(getReply("What is on my todo")); 
console.log(getReply("Remove singing in the shower from my todo")); 
console.log(getReply("What is on my todo")); 


console.log(getReply("What day is it today")); 


console.log(getReply("What is 3 + 3")); 
console.log(getReply("What is 10 - 4"));
console.log(getReply("What is 4 * 12")); 
console.log(getReply("What is 16 / 4")); 
console.log(getReply("What is 16 / 0")); 
console.log(getReply("What is 4 ^ 2")); 


console.log(getReply("Set a timer for 1 minutes")); 
console.log(getReply("Set a timer for 0 minutes")); 
console.log(getReply("Set a timer for five minutes")); 
console.log(getReply("Set a timer for 3 minutes"));
