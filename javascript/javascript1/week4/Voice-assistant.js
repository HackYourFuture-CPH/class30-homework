let name = '';
const todo = [];

function getReply(command){
  command = command.toLowerCase();
  if(command.startsWith('hello my name is')){
  return greeting(command)
  }

  if(command === 'what is my name?'){
   return whatIsName() 
  }
   
  if(command.startsWith('add') && command.includes('to my todo')){
    return addTodo(command);
  }


  if(command.startsWith('remove') && command.includes('from my todo')){
    const task = command.split(' ').slice(1, command.split(' ').length - 3).join(' ');
    removeItem(todo, task);
  }


  if(command === 'what is on my todo?'){
    let items = writeItems(todo)
    return `You have ${todo.length} todos -${items}`
  }


  if(command==='what day is it today?'){
    return findToday();
  }
    
  if (command.startsWith('what is')){
    return simpleMath(command)
  }

  if(command.startsWith('set a timer for'))
    return timer(command);

  if(command === 'who created you?')
    return `Farzaneh Ahmadi!:)`
}


function greeting(command){
  if(name === ''){
    name =command.split(' ').slice(4).join(' ');
    return `Nice to meet you ${name}`}
  else if(name !== '' && name===command.split(' ').slice(4).join(' ') )
    return `Hi agian, ${name}! Nice to meet you!`
  else if(name !== '' && name!==command.split(' ').slice(4).join(' ')){
    name=command.split(' ').slice(4).join(' ');
    return `Nice to meet you ${name}`}
}


function whatIsName(){
  if(name !== '')
    return `${name}`
  else
    return `I don't know your name yet!`
}


function addTodo(command){
  const task = command.split(' ').slice(1, command.split(' ').length - 3).join(' ');
  todo.push(task);
  return todo;
}


function removeItem(array, value){
  for(let i in array){
    if (array[i] === value)
      array.splice(i,1)
  else i++
 }
 return array;
}

function writeItems(array){
  result='';
  for(let i =0; i<array.length; i++){
    if(i===0)
      result+= `'${array[i]}'`
    else
      result+= ` and '${array[i]}'`
    
  }
  return result;
}

function findToday(){
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const today = new Date();
  const day = today.getDate();
  const monthName = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return `${day}. of ${monthName} ${year}`
}

function simpleMath(command){
  const numericalPart = command.split(' ').slice(2,command.split(' ').length).join('');
    const numInt = eval(numericalPart);
    return numInt;
}


function timer(command){
  const startingMinutes = command.split(' ').slice(4,5);
  let time = startingMinutes*60;
  const countdownEl = document.querySelector('.countdown');

  setInterval(updateCountdown,1000)

  function updateCountdown(){
    const minutes= Math.floor(time/60);
    let seconds= time%60;
    countdownEl.innerHTML= `${minutes}: ${seconds}`;
   
    time--;
  }
}

//test cases
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Hello my name is Farzaneh"));
console.log(getReply("What is my name?")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 * 3"));
console.log(getReply("What is 3 + 7"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("who created you?"));