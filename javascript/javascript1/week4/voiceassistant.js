
let result = "";
let toDo = [];

function getReply(command) {
  let commandArray = command.split(" ");

  if (command === "Hello my name is Benjamin") {
    result = commandArray[commandArray.length - 1];
    return `Your name is ${result}`;
  }

  if (command === "What is my name") {
    return result ? `Your name is ${result}` : "I don't know your name.";
  }

  if (commandArray[0] === "Add") {
    const item = commandArray.slice(1, -).join(" ");
    toDo.push(item);
    return `${item} added to your to-do.`;
}

if (commandArray[0] === "Remove") {
    const item = commandArray.slice(1, -1).join(" ");
    toDo = toDo.filter(todo => todo !== item);
    return `${item} removed from your to-do.`;
}


  if (command === "What is on my toDo") {
    return toDo.length > 0 ? `Your to-do list: ${toDo.join(", ")}` : "Your to-do list is empty.";
  }

  if (command === "What day is it today?") {
    const today = new Date();
    return `Today is ${today.toDateString()}.`;
  }

  if (commandArray[0] === "What" && commandArray[1] === "is") {
    const equation = commandArray.slice(2).join(" ");
    try {
      const mathResult = eval(equation);// I don't know if it's right i just found it on google, but it works here
      return `The result of ${equation} is ${mathResult}`;
    } catch {
      return "I couldn't compute that.";
    }
  }

  if (commandArray[0] === "Set" && commandArray[1] === "timer" && commandArray[2] === "for" && commandArray[4] === "minutes") {
    const time = parseInt(commandArray[3]);
    if (isNaN(time)) {
      return "Invalid time format.";
    }
    setTimeout(() => {
      console.log("Timer done!");
    }, time * 60 * 1000);
    return `Timer set for ${time} minutes.`;
  }

  return "Command not available.";
}


console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Add Buy milk  to my todo")); 
console.log(getReply("What is on my toDo")); 
console.log(getReply("Remove Buy milk from my todo")); 
console.log(getReply("What day is it today?")); 
console.log(getReply("What is 5 + 5"));
console.log(getReply("Set timer for 2 minutes")); 
