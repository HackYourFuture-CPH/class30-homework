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
  return console.log(weekDaysArr[eventDaysIndex]);
}

getEventWeekday(1);
getEventWeekday(100);
getEventWeekday(82);
