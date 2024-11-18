const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayNumber = today.getDay();

function getEventWeekday (daysToEvent){
  const eventDayNumber = (dayNumber + daysToEvent) % 7;
  return days[eventDayNumber];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(9));