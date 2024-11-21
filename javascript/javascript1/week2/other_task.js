

// Event application
function getEventWeekday(day){
  const weekDays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate  = new Date();
  const dayNumbers = currentDate.getDay();
   const futureDay= (day + dayNumbers) % 7;
   console.log(weekDays[futureDay]);
}
getEventWeekday(1);


// Weather wear 
 function SuitableClothes(temperture){
  let suggestion=``;
  if(temperture<0){
    suggestion=`It is very cold today, so you should wear very warm clothes`;
  }
  else if (temperture>=0 && temperture<10){
    suggestion= `It is cold today, so you should wear warm clothes`;
  }
  else if (temperture>=10 && temperture<15){
    suggestion=`The weather is cool, so wear relatively warm clothes`;
  }
  else if ( temperture>=15 && temperture<25){
    suggestion=`The weather is quite mild; it's neither too chilly nor too warm, so you can wear spring attire`;
  }
  else if (temperture>=25 && temperture<35){
    suggestion=`Today is very hot; you should wear light and cotton clothes.`;
  }
  else if (temperture>=35){
   suggestion=`It's so hot today that you shouldn't wear anything \u{1f600}`;
  }
  return(suggestion)
 }
 console.log(SuitableClothes(10));


 // switch
 function SuitableClothes(temperture) {
  let suggestion = ``;
  switch (true) {
    case temperture < 0:
      suggestion = `It is very cold today, so you should wear very warm clothes.`;
      break;
    case temperture >= 0 && temperture < 10:
      suggestion = `It is cold today, so you should wear warm clothes.`;
      break;
    case temperture >= 10 && temperture < 15:
      suggestion = `The weather is cool, so wear relatively warm clothes.`;
      break;
    case temperture >= 15 && temperture < 25:
      suggestion = `The weather is quite mild; it's neither too chilly nor too warm, so you can wear spring attire.`;
      break;
    case temperture >= 25 && temperture < 35:
      suggestion = `Today is very hot; you should wear light and cotton clothes.`;
      break;
    case temperture >= 35:
      suggestion = `It's so hot today that you shouldn't wear anything \u{1f600}`;
      break;
  }

  return suggestion;
}
console.log(SuitableClothes(10));


//Student manager
 
const class07Students = [];
function addStudent(studentName){
  if(studentName===`Queen`){
    class07Students.push(`Queen`)
    return;
  }
  
  if (studentName===``){
    console.log(`Please put valid name`);
    return;
  }
  
  
  if(class07Students.length>=5 ){
    console.log(`Cannot add more students to class 07`);
  }
  if(class07Students.includes(studentName)){
      console.log(`Student ${studentName} is already in the class`);
    }
   else{
    class07Students.push(studentName)
    console.log(`${studentName} is add successfull`);
   }
}
function getNumberOfStudents(studentName){
  let foundName=false;
  for(let i=0; i<=class07Students.length; i++){
    if (class07Students[i]===studentName){
      console.log(`the ${studentName} number is: ${i}`);
      foundName=true;
      break;
    }
      
  }
  if( !foundName){
    console.log(`this student is not in this class`)
  }
  
  }




addStudent(`name1`)
addStudent(``)
addStudent(`name2`)
addStudent(`name3`)
addStudent(`name4`)
addStudent(`name5`)
addStudent(`name6`)
addStudent(`Queen`)
addStudent(`name1`)
addStudent(`name2`)
addStudent(`name7`)
addStudent(`name1`)
getNumberOfStudents(`name1`)



//Candy helper optional
let CandyPrices={ Sweet:0.5, Chocolate:0.7,Toffee:1.1,ChewingGum:0.03};
let  boughtCandyPrices=[];
let amountToSpend= Math.random()*100;
 function addCandy(candyType,weight){
  
  
  let candyPrisToBuy=CandyPrices[candyType]*weight;
  boughtCandyPrices.push(candyPrisToBuy);
  return boughtCandyPrices;
 }

  function canBuyMoreCandy(){
    let canBuyCandy= true
    let sumCandiesPrice=sumPrices();
    if(amountToSpend>sumCandiesPrice){
      console.log(`You can buy more, so please do!`);
    }
      else{
        console.log(`Enough candy for you!`);
      }
    

    
  }
   function sumPrices(){
    let sum=0;
    let i=0;
    while 
      ( i<boughtCandyPrices.length){
        sum+= boughtCandyPrices[i]
        i++;
      }
      return sum;
    }
    addCandy("Sweet", 20);  
addCandy("Chocolate", 15);  
canBuyMoreCandy();  

   
   

  

  

 
