const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const todaysDay = new Date();

function getEventWeekday(days) {
    const eventDayNum = (todaysDay.getDay() + days) % 7;
    return weekDays[eventDayNum];
}

console.log(getEventWeekday(2));
console.log(getEventWeekday(10));