//Event application
const daysFromToday= prompt("How many days from today is the event?");
const today = prompt("Which day is today?")
function getEventWeekday(daysFromToday,today){
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]; 
    const todayIndex = weekdays.indexOf(today);
    const eventDayIndex = (todayIndex + daysFromToday) % 7;
    return weekdays[eventDayIndex];
}
console.log(" on" + getEventWeekday(daysFromToday,today));