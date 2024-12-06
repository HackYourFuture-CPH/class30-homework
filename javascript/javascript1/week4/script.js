let userName = null; 
let todoList = []; 

function getReply(command) {
  const lowerCaseCommand = command.toLowerCase();

  if (lowerCaseCommand.startsWith('hello my name is ')) {
    const name = command.slice(17); 
    if (userName === name) {
      return `You already introduced yourself as ${name}.`;
    } else {
      userName = name;
      return `Nice to meet you ${name}`;
    }
  }

  if (lowerCaseCommand === 'what is my name?') {
    return userName
      ? `Your name is ${userName}`
      : "I don't know your name yet. Please tell me your name first.";
  }

  if (
    lowerCaseCommand.startsWith('add ') &&
    lowerCaseCommand.includes(' to my todo')
  ) {
    const todo = command.slice(4, command.indexOf(' to my todo'));
    todoList.push(todo);
    return `${todo} added to your todo.`;
  }

  if (
    lowerCaseCommand.startsWith('remove ') &&
    lowerCaseCommand.includes(' from my todo')
  ) {
    const todo = command.slice(7, command.indexOf(' from my todo'));
    const index = todoList.indexOf(todo);
    if (index > -1) {
      todoList.splice(index, 1); 
      return `Removed ${todo} from your todo.`;
    } else {
      return `${todo} is not in your todo list.`;
    }
  }

  if (lowerCaseCommand === 'what is on my todo?') {
    if (todoList.length === 0) {
      return 'Your todo list is empty.';
    } else {
      return `You have ${todoList.length} todos: ${todoList.join(', ')}.`;
    }
  }

  if (lowerCaseCommand === 'what day is it today?') {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' }); 
    const year = today.getFullYear();
    return `${day}. of ${month} ${year}`;
  }

  if (lowerCaseCommand.startsWith('what is ')) {
    const mathExpression = command.slice(8); 
    try {
      const result = eval(mathExpression); 
      return `${mathExpression} is ${result}`;
    } catch (error) {
      return "Sorry, I couldn't calculate that.";
    }
  }

  if (
    lowerCaseCommand.startsWith('set a timer for ') &&
    lowerCaseCommand.includes(' minutes')
  ) {
    const minutes = parseInt(command.slice(16, command.indexOf(' minutes')));
    if (isNaN(minutes)) {
      return "I couldn't understand the time duration.";
    }
    setTimeout(() => {
      console.log('Timer done!');
    }, minutes * 60 * 1000); 
    return `Timer set for ${minutes} minutes.`;
  }

  return "Sorry, I didn't understand that command.";
}

console.log(getReply('Hello my name is Benjamin')); 
console.log(getReply('What is my name?')); 
console.log(getReply('Add fishing to my todo')); 
console.log(getReply('Add singing in the shower to my todo')); 
console.log(getReply('What is on my todo?'));
console.log(getReply('Remove fishing from my todo')); 
console.log(getReply('What is on my todo?')); 
console.log(getReply('What day is it today?')); 
console.log(getReply('What is 3 + 3')); 
console.log(getReply('Set a timer for 1 minutes')); 
