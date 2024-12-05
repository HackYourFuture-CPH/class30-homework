let personName = "";
let todos = [];
function getReply(command) {
  //!------------ First scenario "Hello my name is Benjamain"----------!
  if (command.toLowerCase().startsWith("hello my name is")) {
    const name = command.split(" ")[4];
    if (personName === "") {
      personName = name;
      console.log(`Nice to meet you ${name}`);
    } else if (personName === name) {
      console.log(
        `I already know your name is  ${name}. Nice to see you again`
      );
    } else {
      console.log(
        `I see you're introducing a new name, nice to see you ${name}`
      );
    }
    return;
  }

  //!------------ Second scenario "What is my name?"----------!

  if (command.toLowerCase().includes("what is my name?")) {
    if (personName === "") {
      console.log("I didn't find your name. Could you pls help me!");
    } else {
      console.log(`Your name is ${personName}`);
    }
    return;
  }
  //!------------ Third scenario Add tasks to my todo----------!
  if (
    command.toLowerCase().startsWith("add ") &&
    command.toLowerCase().endsWith(" to my todo")
  ) {
    let indexStart = command.split(" ").indexOf("Add");
    let indexEnd = command.split(" ").indexOf("to");
    let todoTask = command
      .split(" ")
      .slice(indexStart + 1, indexEnd)
      .join(" ");
    todos.push(todoTask);
    console.log(`${todoTask} added to your todo`);

    return todos;
  }
  //!------------ Fourth scenario Remove tasks to my todo----------!
  if (
    command.toLowerCase().startsWith("remove") &&
    command.toLowerCase().endsWith(" from my todo")
  ) {
    let removeTask = command.split(" ")[1];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === removeTask) {
        todos.splice(todos.indexOf(removeTask), 1);
      }
    }
    console.log(`Removed ${removeTask} from your todo`);
  }
  //!------------ Fifth scenario Displaying tasks in my todo----------!
  if (command.toLowerCase().includes("what is on my todo?")) {
    const length = todos.length;
    const lastTask = todos[length - 1];
    const allTasks = todos.slice(0, -1).join(", ");
    console.log(`You have ${todos.length} todos - ${allTasks} and ${lastTask}`);

    return;
  }

  //!------------ Sixth scenario Get today's date----------!

  if (command.toLowerCase().includes("what day is it today?")) {
    const date = new Date();
    const monthName = [
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

    const day = date.getDay();
    const month = monthName[date.getMonth()];
    const year = date.getFullYear();

    console.log(`${day}. of ${month} ${year}`);
  }

  //!------------ Seventh scenario Simple Calculator----------!

  if (command.toLowerCase().startsWith("what is")) {
    const firstNumber = parseInt(command.split(" ")[2]);
    const secondNumber = parseInt(command.split(" ")[4]);
    const operator = command.split(" ")[3];

    switch (operator) {
      case "+":
        console.log(firstNumber + secondNumber);
        break;
      case "-":
        console.log(firstNumber - secondNumber);
        break;
      case "*":
        console.log(firstNumber * secondNumber);
        break;
      case "/":
        console.log(firstNumber / secondNumber);
        break;
      case "%":
        console.log(firstNumber % secondNumber);
        break;
      default:
        console.log("Unknown value");
    }
  }

  //!------------ Eigth scenario Simple Calculator----------!

  if (command.toLowerCase().includes("set a timer for")) {
    const timerInMinutes = parseInt(command.split(" ")[4]);
    setTimeout(() => {
      console.log("Timer is done");
    }, timerInMinutes * 60 * 1000);

    console.log(`Timer is set for ${timerInMinutes} minutes`);
  }

  return;
}

getReply("Hello my name is Benjamin");
getReply("What is my name?");
getReply("Hello my name is Benjamin");
getReply("Hello my name is Gayathri");
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add doctor appointment to my todo"));
getReply("What is on my todo?");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 3 + 3?");
getReply("What is 4 * 12?");
getReply("Set a timer for 2 minutes");
