
const users=[];
let fName=``;
const listOfToDo=[];
function getReply(command){
  // part one(getting and checking the name and give the appropriate response)
  
  
  const constantExpression =`Hello my name is`
  if(command.startsWith(constantExpression)){
   const strArray=command.split(` `);
    fName=strArray[4]
     if(users.includes(fName)){
      return `Dear ${fName} you existed before`
     }
     else{
        users.push(fName);
         return `nice to meet you ${fName}`
     }
   
   }
  // part two(What is my name)

  else if (command===`What is my name`){
    if (fName){
       return `your name is ${fName}`
    }
    else{
      return `I do not your name`
    }

  }
// part tree(Add fishing to my todo)

   else if(command===`Add fishing to my todo`){
  listOfToDo.push(`fishing`)
  return `fishing added to your todo`
}
// part four(Add singing in the shower to my todo)
  else if (command===`Add singing in the shower to my todo`){
  listOfToDo.push(`shower`)
  return `shower added to your todo `
}
// part five(Remove fishing from my todo)
  else if (command === `Remove fishing from my todo`){
  const indexOfFishing= listOfToDo.indexOf(`fishing`)
    
      listOfToDo.splice(indexOfFishing, 1)
      return`Removed fishing from your todo"`
    }
    // part six(What is on my todo?)
   else if(command===`What is on my todo?`){
    let numberOfToDo= listOfToDo.length;
    let namesOfTodo= listOfToDo.join();
    return `you have ${numberOfToDo}  todo ${namesOfTodo}`


   } 

   // part seven(What day is it today)
   else if (command===`What day is it today?`){
    let now = new Date()
    let dateOfNow= now.toDateString()
    return dateOfNow
   }

   // part eight(Should be able to do simple math)
   else if(command.startsWith(`what is`)){
    const arryOfcommand=command.split(` `);
    const numberOne=Number(arryOfcommand[2]);
    const numberTwo=Number(arryOfcommand[4]);
    const operator=arryOfcommand[3];
    let result=0;
    switch (operator){
      case`+` :
      result = numberOne+numberTwo;
      break;
      case `*`:
        result= numberOne*numberTwo;
        break;
        case `-`:
          result=numberOne-numberTwo;
          break;
          case `/`:
            result=numberOne/numberTwo;
            
    }
            return result
   }
// part nine(Set a timer )

else if(command.startsWith(`Set a timer for`)){
  const arryOfcommand=command.split(` `);
  const timer=Number(arryOfcommand[4]);
  let timeToMs=timer*60000
  console.log(`Set a timer for ${timer} minutes`)
  setTimeout (()=>console.log(`Timer done`),timeToMs)
}

 // part ten (Which exercise is for today?)
else if(command===`Which exercise is for today?`){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const daysExercise =["fitness","swimming","fitness","walking","fitness","running","cycling",]
  const days= new Date();
  const today=days.getDay();
  return `today is ${weekday[today]} and you should go to ${daysExercise[today]} `

}
  }


console.log(getReply(`Hello my name is ali`))
console.log(getReply(`What is my name`))
console.log(getReply(`Add fishing to my todo`))
console.log(getReply(`Add singing in the shower to my todo`))
console.log(getReply(`Remove fishing from my todo`))
console.log(getReply(`What is on my todo?`))
console.log(getReply(`What day is it today?`))
console.log(getReply(`what is 12 / 3 `))
console.log(getReply(`Set a timer for 1 minutes`))
console.log(getReply(`Which exercise is for today?`))

console.log(listOfToDo)
