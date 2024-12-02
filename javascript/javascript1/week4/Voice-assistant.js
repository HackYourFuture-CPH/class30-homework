function getReply(command){
  let name ;
  const todo = [];


  if(command.startsWith('Hello my name is')  && name===null ){
    name =command.split(' ').slice(4).join;
    return `Nice to meet you ${name}`
  }else if(command.startsWith('Hello my name is')  && name!==null)  
    return `I already know you, ${name}!`


  if(command === 'What is my name?' && name.length!==0){
    return `${name}`;
  }else if(command === 'What is my name?' && name.length===0) 
    return `I don't know :(`

    
  if(command.startsWith('Add') && command.include('to my todo')){
    const task = command.split(' ').slice(1, command.split(' ').length - 3).join('');
    todo.push(task);
    return todo
  }


  if(command.startsWith('Remove') && command.include('from my todo')){
    const task = command.split(' ').slice(1, command.split(' ').length - 3).join('');
    removeItem(todo, task);
  }


  if(command === 'What is on my todo?'){
    let items = writeItems(todo)
    return `You have ${todo.length} todos - ${items}`
  }


  if(command==='What day is it today?'){
    findToday();
  }
    
  if (command.startsWith('What is ')){
    const numericalPart = command.split(' ').slice(2,command.split(' ').length-1).join;
    const numInt = parseInt(numericalPart);
    return numInt;
  }

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
  for(let i in array){
    result+=array[i]+' and '
  }
  return result;
}

function findToday(){
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ]
  const today = new Date();
  const day = today.getDate();
  const monthName = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return `${day}. of ${monthName} ${year}`
}