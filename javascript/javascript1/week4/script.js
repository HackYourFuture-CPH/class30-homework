//Exercise 1 Vowel Count KATA
function getVocals(string){
const vocals = ["a","e","i","o","u"]
let counter = 0;
  for (let char of string.toLowerCase()){
   if (vocals.includes(char)){
      counter++;
   
   }
  }
  return counter;
}

console.log(getVocals("aeiouy"));

//Exercise 2 KATA
function powerOf(number){
  result =" ";
  for (let operation of number.toString()){

    result += (Number(operation) **2);
    
  }
  return Number(result);
}


console.log(powerOf(5));
console.log(powerOf(9119));
console.log(powerOf(765));


//Exercise 3 KATA

function highestAndLowest(num){
 for (let i = 0; i < num; i++){
  if ( i < num){
    console.log(i + " "+ number);
  } else if (i > number){
    console.log(number + "" ,i);
  }else {
    console.log("are equals")
  }
 
 }return num;
} 

//Voice Assistant
let personName;
const toDo = [];

function getReply(command) {
  if (command.startsWith("hello my name is ")) {
    let name = command.replace("hello my name is ", "").trim();
    if (personName && personName === name) {
      return `Hi again, ${personName}`;
    } else{
    return `Nice to meet you, ${personName}`;
    }
  }
  if (command === "What is my name?") {
    return `Your name is ${personName}`;
  }else{
    return "You didn't put your name"
  }
}
if (command.startsWith("Add ")) {
  let task = command.slice(4); 
  toDo.push(task);
   return `${task} has been added to your to-do list.`;
}

if (command.startsWith("Remove")){
  let task = command.replace("Remove ","");
  const index = toDo.indexOf(task);
  if (index > -1){
    toDo.splice(index, 1);
  return `${task} has been removed.`;
  }
}

if (command.startsWith("What is on my todo")){
  return `${toDo} is in your list`;

}
if (command.startsWith("what is")) {
  return calculate(command);
}

if (command.startsWith("Set a timer for")) {
  return setTimer(command);
}

if (command.startsWith("What is the purpose of life?")) {
  return "To find your unique path!";
}

