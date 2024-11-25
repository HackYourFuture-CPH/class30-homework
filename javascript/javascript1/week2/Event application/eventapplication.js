const todayDate = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekDays(days) {
  const futureDate = todayDate.getDay();
  const eventDayIndex = (futureDate + days) % 7;
  return weekDays[eventDayIndex];
}

console.log(getEventWeekDays(10));
console.log(getEventWeekDays(9));
