// TASK Step 3: Smart-ease - Goes Global! : Flight booking fullname function

function getFullname(
  firstname,
  surname,
  useFormalName = false,
  gender = 'male',
) {
  if (!firstname || !surname) {
    return 'Invalid name';
  }

  if (useFormalName) {
    if (gender === 'male') {
      return 'Lord ' + firstname + ' ' + surname;
    } else if (gender === 'female') {
      return 'Lady ' + firstname + ' ' + surname;
    } else {
      return 'Dear ' + firstname + ' ' + surname;
    }
  } else {
    return firstname + ' ' + surname;
  }
}

let fullname1 = getFullname('Benjamin', 'Hughes');
let fullname2 = getFullname('Anne', 'Hathaway', true, 'female');
let fullname3 = getFullname('Cillian', 'Murphy', true, 'male');
let fullname4 = getFullname('Emilia', 'Clarke', true, 'female');
let fullname5 = getFullname('Taylor', 'Swift', true);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);

//TASK : Event application

function getEventWeekday(daysFromToday) {
  const today = new Date();
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const todayIndex = today.getDay();
  const eventDayIndex = (todayIndex + daysFromToday) % 7;

  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(3));

// TASK : Weather wear

function whatToWear(temp) {
  if (temp >= 25) {
    return 'shorts and T-shirt';
  } else if (temp >= 18) {
    return 'jeans and longsleve';
  } else if (temp >= 10) {
    return 'jeans and sweter';
  } else if (temp >= 0) {
    return 'warm trausers, blaser and scarf';
  } else {
    return 'I have nothing to wear!';
  }
}

const clothesToWear = whatToWear(22);
console.log(clothesToWear);

// TASK : Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName) {
    console.log('You cannot add an empty student name.');
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
    return;
  }
  if (studentName === 'Queen' || class07Students.length < 6) {
    class07Students.push(studentName);
    console.log(`${studentName} has been added to the class.`);
  } else {
    console.log('Cannot add more students to class.');
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass('Ruslana');
addStudentToClass('Andrii');
addStudentToClass('Ayman');
addStudentToClass('Farzaneh');
addStudentToClass('Soheib');
addStudentToClass('Parisa');
addStudentToClass('Julie');

addStudentToClass('Ruslana');

addStudentToClass('Queen');

addStudentToClass('');

console.log(`Total students in the class: ${getNumberOfStudents()}`);

// OPTIONAL TASK : Candy helper

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  const candyPrices = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    'chewing-gum': 0.03,
  };

  if (candyType in candyPrices) {
    const price = candyPrices[candyType] * weight;
    boughtCandyPrices.push(price);
  } else {
    console.log('Invalid candy type!');
  }
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let price of boughtCandyPrices) {
    totalPrice += price;
  }

  // using while loop
  /*
    let i = 0;
    while (i < boughtCandyPrices.length) {
        totalPrice += boughtCandyPrices[i];
        i++;
    }
    */

  if (totalPrice < amountToSpend) {
    console.log('You can buy more!');
    return true;
  } else {
    console.log("That's enough candy for you!");
    return false;
  }
}

addCandy('sweet', 20);
addCandy('chocolate', 15);
addCandy('toffee', 10);
addCandy('chewing-gum', 50);
console.log('Bought Candy Prices:', boughtCandyPrices);

canBuyMoreCandy();
