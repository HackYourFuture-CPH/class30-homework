

function getFullname(firstname, surname, useFormalName, isFemale) {
    if (!firstname || !surname) {
        return "Please provide both firstname and surname.";
    }
    
    if (useFormalName) {
        if (isFemale) {
            return `Lady ${firstname} ${surname}`;
        } else {
            return `Lord ${firstname} ${surname}`;
        }
    }
    
    return `${firstname} ${surname}`;
}


console.log(getFullname("John", "Doe", true, false)); //  Lord John Doe
console.log(getFullname("Jane", "Doe", true, true));  //  Lady Jane Doe
console.log(getFullname("Alex", "Smith", false));     //  Alex Smith
console.log(getFullname("", "Smith", true, false));   //  Please provide both firstname and surname.



function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const eventDay = (today + daysFromToday) % 7;
    return weekdays[eventDay];
}
console.log(getEventWeekday(9)); 
console.log(getEventWeekday(1));



function whatToWear(temperature) {
    if (temperature < 10) {
        return "Wear a heavy jacket, scarf, and gloves.";
    } else if (temperature < 20) {
        return "Wear a light jacket and long pants.";
    } else {
        return "Shorts and a t-shirt are fine.";
    }
}
console.log(whatToWear(18)); 




const class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName || studentName.trim() === "") {
    return "You cannot add an empty name.";
  }
  if (class07Students.includes(studentName)) {
    return `Student ${studentName} is already in the class.`;
  }
  if (studentName === "Queen" || class07Students.length < 6) {
    class07Students.push(studentName);
    return `Student ${studentName} added successfully.`;
  }
  return "Cannot add more students to class 07.";
}

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(addStudentToClass(""));         // You cannot add an empty name.
console.log(addStudentToClass("   "));      // You cannot add an empty name.
console.log(addStudentToClass("Benjamin")); // Student Benjamin added successfully.
console.log(addStudentToClass("Sophia"));   // Student Sophia added successfully.
console.log(addStudentToClass("Queen"));    // Student Queen added successfully.
console.log(addStudentToClass("Oliver"));   // Student Oliver added successfully.
console.log(addStudentToClass("Ava"));      // Student Ava added successfully.
console.log(addStudentToClass("Emma"));     // Student Emma added successfully.
console.log(addStudentToClass("Liam"));     // Cannot add more students to class 07.
console.log(addStudentToClass("Sophia"));   // Student Sophia is already in the class.

console.log(`Number of students: ${getNumberOfStudents()}`);




const boughtCandyPrices = [];
function addCandy(candyType, weight) {
    const candyPrices = {
        sweet: 0.5,
        chocolate: 0.7,
        toffee: 1.1,
        "chewing-gum": 0.03
    };

    if (candyPrices[candyType]) {
        boughtCandyPrices.push(candyPrices[candyType] * weight);
    } else {
        console.log("Unknown candy type.");
    }
}
const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    let totalPrice = 0;
    let i = 0;

    while (i < boughtCandyPrices.length) {
        totalPrice += boughtCandyPrices[i];
        i++;
    }

    if (totalPrice < amountToSpend) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}

addCandy("sweet", 20);
addCandy("chocolate", 15);
addCandy("toffee", 10);

canBuyMoreCandy();