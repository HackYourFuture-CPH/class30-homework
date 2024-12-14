let clientName = "";
const toDoList = [];
function getReply(command) {
  const myNameis = command.split(" ").slice(-1)[0];
  const simpleCalculation = command.match(
    /what is (\d+)\s*([\+\-\*\/])\s*(\d+)/
  );
  const whatIsMyname = "What is my name?";
  const setATimer = command.match(
    /set a timer for (\d+)\s*(seconds|minutes|hours)/i
  );
  const removeFromMyToDo = command.match(/remove (.*?) from my todo/);
  const addToMyToDo = command.match(/add (.*?) to my todo/);
  const todayDate = "what day is today?";
  const showTodo = "what is on my todo";

  if (simpleCalculation) {
    assitantsave.simpleCalculation(command);
  } else if (command === whatIsMyname) {
    assitantsave.viewMyName(command);
  } else if (setATimer) {
    assitantsave.setAtimer(command);
  } else if (removeFromMyToDo) {
    assitantsave.removeFromMyToDo(command);
  } else if (addToMyToDo) {
    assitantsave.addToMyToDo(command);
  } else if (todayDate === command) {
    assitantsave.getFormattedDate();
  } else if (showTodo === command) {
    assitantsave.whatIsOnMyToDo();
  } else if (myNameis) {
    assitantsave.addName(command);
  } else {
    console.log("command is not recognized.");
  }
}

const assitantsave = {
  addName(command) {
    clientName = command.split(" ").slice(-1)[0].trim();
    if (clientName) {
      console.log("Nice to meet you " + clientName);
    } else {
      console.log("It seems like you didn't provide a valid name.");
    }
  },
  viewMyName(command) {
    if (clientName === "" || clientName === " ") {
      console.log("you have not told me your name yet.");
    }
    console.log("Your name is " + clientName);
  },
  addToMyToDo(command) {
    const match = command.match(/add (.*?) to my todo/);
    toDoList.push(match[1]);
    console.log(match[1] + " added to your list");
  },
  removeFromMyToDo(command) {
    const match = command.match(/remove (.*?) from my todo/);
    if (match) {
      const item = match[1];
      const index = toDoList.indexOf(item);
      if (index !== -1) {
        toDoList.splice(index, 1);
        console.log(`${item} removed from your list`);
      } else {
        console.log(`"${item}" is not in your to-do list.`);
      }
    } else {
      console.log(
        "Command not recognized. Please use `remove [item] from my todo'."
      );
    }
  },
  whatIsOnMyToDo() {
    console.log(toDoList);
  },
  getFormattedDate(command) {
    const date = new Date();

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    console.log(`${day}. of ${month} ${year}`);
  },
  simpleCalculation(command) {
    const match = command.match(/what is (\d+)\s*([\+\-\*\/])\s*(\d+)/);
    if (match) {
      const num1 = parseFloat(match[1]);
      const operator = match[2];
      const num2 = parseFloat(match[3]);
      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          console.log(
            "Invalid operator - Try again with a +, -, *, or / equation"
          );
          return;
      }
      console.log(`${result}`);
    } else {
      console.log("Invalid format - Please use the format 'what is X + Y'");
    }
  },
  setAtimer(command) {
    const match = command.match(
      /set a timer for (\d+)\s*(seconds|minutes|hours)/i
    );
    if (match) {
      const duration = parseInt(match[1]);
      const unit = match[2].toLowerCase();
      let milliseconds;
      switch (unit) {
        case "seconds":
          milliseconds = duration * 1000;
          break;
        case "minutes":
          milliseconds = duration * 60 * 1000;
          break;
        case "hours":
          milliseconds = duration * 60 * 60 * 1000;
          break;
        default:
          console.log("Invalid time unit");
          return;
      }

      console.log(
        `Timer set for ${duration} ${unit} (${milliseconds} milliseconds).`
      );
      setTimeout(() => {
        console.log(`Timer finished after ${duration} ${unit}!`);
      }, milliseconds);
    }
  },
};

getReply("Hello my name is Benjamin");
getReply("What is my name?");
getReply("add fishing to my todo");
getReply("add Taking a shower to my todo");
getReply("remove fishing from my todo");
getReply("what is on my todo");
getReply("what day is today?");
getReply("what is 3 + 5?");
getReply("set a timer for 5 seconds");
