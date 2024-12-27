const weekDaysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(daysFromNow) {
  const todaysIndex = new Date().getDay();
  const eventDaysIndex = (todaysIndex + daysFromNow) % 7;
  return weekDaysArr[eventDaysIndex];
}

const actualWeekday = getEventWeekday(1);
console.log(actualWeekday);
console.log(getEventWeekday(100));
console.log(getEventWeekday(82));
