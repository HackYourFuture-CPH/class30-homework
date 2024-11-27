const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getEventWeekDay(days) {
    const today = new Date().getDay();;
    const result = (days + today)%7
    return weekDays[result]
}
console.log(getEventWeekDay(5))