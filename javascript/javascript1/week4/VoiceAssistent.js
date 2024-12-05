let userName = ""; 
const todos = []; 

function getReply(command) {
  // Name Part
  if (command.startsWith("Hello my name is")) {
    const name = command.replace("Hello my name is ", "");
    if (userName === name) {
      return `We already met, ${name}.`;
    } else {
      userName = name;
      return `Nice to meet you ${name}`;
    }
  }


  if (command === "What is my name?") {
    if (userName === "") {
      return "I don't know your name yet.";
    } else {
      return `Your name is ${userName}`;
    }
  }

  // Todos Part
  if (command.startsWith("Add") && command.endsWith("to my todo")) {
    const task = command.replace("Add ", "").replace(" to my todo", "");
    todos.push(task);
    return `${task} added to your todo`;
  }

  if (command.startsWith("Remove") && command.endsWith("from my todo")) {
    const task = command.replace("Remove ", "").replace(" from my todo", "");
    const index = todos.indexOf(task);
    if (index > -1) {
      todos.splice(index, 1);
      return `Removed ${task} from your todo`;
    } else {
      return `${task} is not in your todo`;
    }
  }

  if (command === "What is on my todo?") {
    if (todos.length === 0) {
      return "You have no todos.";
    } else {
      return `You have ${todos.length} todos: ${todos.join(", ")}`;
    }
  }

  // Day Part
  if (command === "What day is today?") {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" }); 
    const year = today.getFullYear(); 
    return `${day}. of ${month} ${year}`;
  }


if (command.startsWith("What is")) {
    let [num1, operator, num2] = command.replace("What is ", "").split(" ");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return "I couldn't understand the numbers.";
    }
  
    switch (operator) {
      case "+": return `${num1 + num2}`;
      case "-": return `${num1 - num2}`;
      case "*": return `${num1 * num2}`;
      case "/": return `${num1 / num2}`;
    }
  }



    if (command.startsWith("Set a timer for")) {
      let time = parseInt(command.replace("Set a timer for ", "").replace(" minutes", ""));
      
      if (!isNaN(time)) {
        setTimeout(() => {
          console.log("Timer done");
        }, time * 60000);
  
        return `Timer set for ${time} minutes`;
      } else {
        return "I couldn't understand the time.";
      }
    }
    return "I don't understand that command.";
  }
  

  
  // console.logs
console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Add fishing to my todo")); 
console.log(getReply("Add singing in the shower to my todo")); 
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is today?")); 
console.log(getReply("What is 2 + 3?"));     
console.log(getReply("What is 5 * 1?"));  
console.log(getReply("What is 10 / 2?"));    
console.log(getReply("What is 10 - 5?"));      
console.log(getReply("Set a timer for 1 minutes"));
