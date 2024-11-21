function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDay = today.getDay();
    const eventDay = (currentDay + daysFromToday) % 7;
    return weekdays[eventDay];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));
