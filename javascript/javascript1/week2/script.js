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
