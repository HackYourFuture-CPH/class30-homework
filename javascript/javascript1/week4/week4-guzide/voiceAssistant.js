const toDo = [];
let userName = "";

function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    return setUserName(command);
  }

  if (command.startsWith("What is my name?")) {
    return getUserName();
  }

  if (command.startsWith("Add")) {
    return addToDo(command);
  }

  if (command.startsWith("Remove")) {
    return removeToDo(command);
  }

  if (command === "What is on my todo?") {
    return showToDos();
  }

  if (command === "What day is it today?") {
    return getAndFormatDate();
  }

  if (command.startsWith("what is")) {
    return calculate(command);
  }

  if (command.startsWith("Set a timer for")) {
    return setTimer(command);
  }

  if (command === "What is the purpose of life?") {
    return "To find your unique path!";
  }
}

function setUserName(input) {
  userName = input.split(" ").slice(4).join(" ");
  return `Nice to meet you ${userName.toLowerCase()}`;
}

function getUserName() {
  if (userName) {
    return `Your name is ${userName}`;
  } else {
    return "Please, first save your name!";
  }
}

function addToDo(input) {
  const inputArray = input.split(" ");
  const taskToDo = inputArray.slice(1, inputArray.length - 3).join(" ");
  toDo.push(taskToDo);
  return `${taskToDo.toLowerCase()} added to your todo.`;
}

function removeToDo(input) {
  const inputArray = input.split(" ");
  const taskToRemove = inputArray.slice(1, inputArray.length - 3).join(" ");
  const taskToRemoveIndex = toDo.indexOf(taskToRemove);
  if (toDo.includes(taskToRemove)) {
    toDo.splice(taskToRemoveIndex, 1);
    return `Removed ${taskToRemove} from your todo.`;
  } else {
    return `${taskToRemove} is not in your todo.`;
  }
}

function showToDos() {
  if (toDo.length > 0) {
    return `You have ${toDo.length} todos - ${toDo.join(", ")}.`;
  } else {
    return "Your todo list is empty.";
  }
}

function getAndFormatDate() {
  const today = new Date();
  const day = today.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return `${day}. of ${month} ${year}`;
}

function calculate(input) {
  const numbers = input.match(/\d+/g).map(Number);
  const operators = input.match(/[\+\-\*\/]/)?.[0];
  if (numbers?.length === 2 && operators) {
    const [a, b] = numbers;
    switch (operators) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Cannot divide by zero";
      default:
        return "Sorry, this operator is not supported.";
    }
  }
  return "Error! Invalid calculation command.";
}

function setTimer(input) {
  const time = input.match(/Set a timer for (\d+) minutes/i);

  if (time) {
    const minutes = parseInt(time[1], 10);
    console.log(`Timer set for ${minutes} minutes.`);
    const milliseconds = minutes * 60 * 1000;
    setTimeout(() => {
      console.log("Timer done.");
    }, milliseconds);
    return "Counting";
  } else {
    return "Invalid command. Please use the format: 'Set a timer for n minutes'.";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is the purpose of life?"));
console.log(getReply("Set a timer for 2 minutes")); //You should wait for that x min to see the full response
console.log(getReply("Set a timer for time minutes"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("what is 89 / 12"));
console.log(getReply("what is 4 = 28"));
console.log(getReply("What day is it today?"));
