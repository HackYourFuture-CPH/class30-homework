function getFullname(firstname, surname, useFormalName) {
    if (!firstname || !surname) {
        return "Please provide both firstname and surname.";
    }
    if (useFormalName) {
        return `Lord ${firstname} ${surname}`;
    } else {
        return `${firstname} ${surname}`;
    }
}
const fullname1 = getFullname("Benjamin", "Hughes", true); 
const fullname2 = getFullname("Sophia", "Smith", false);  

console.log(fullname1);
console.log(fullname2);



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
    if (!studentName) {
        console.log("You cannot add an empty name.");
        return;
    }
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class.`);
        return;
    }
    if (studentName === "Queen" || class07Students.length < 6) {
        class07Students.push(studentName);
    } else {
        console.log("Cannot add more students to class 07.");
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Sophia");
addStudentToClass("Queen");
addStudentToClass("Oliver");
addStudentToClass("Ava");
addStudentToClass("Emma");
addStudentToClass("Liam"); 

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