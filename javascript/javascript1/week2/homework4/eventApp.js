const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const today = new Date()
function getEventWeekDay(days) {
    const day = today.getDay();
    let result;
    if(day + days <7){
        result = day + days -1;
    } else if (day + days >= 7) {
        result = (day + days -1)%7
    }
    return weekDays[result]
}
console.log(getEventWeekDay(5))