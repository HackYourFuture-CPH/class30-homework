
function getEventWeekDay(num){

    const todaysDate = new Date();
    const dayName = todaysDate.toLocaleString('en-US', {weekday: 'long'});
    const findDay = (todaysDate.getDay() + num) % 7;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[findDay];
}

console.log(getEventWeekDay(1))