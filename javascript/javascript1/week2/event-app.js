function getEventWeekday(daysFromPresentDay){

    const days = ["sunday","monday","tuesday","wednsday","thursday","friday","saturday","sunday"];
    const presentDay = new Date().getDay();
    const futureEventDay = (presentDay + daysFromPresentDay) % 7;
    return days[futureEventDay];
}  

console.log(getEventWeekday(1));

