function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();

    let eventDay = today;
    for (let i = 0; i < daysFromToday; i++) {
        eventDay++; 
        if (eventDay >= weekdays.length) {
            eventDay = 0; 
        }
    }
    return weekdays[eventDay];
}


 
console.log(getEventWeekday(6)); 

