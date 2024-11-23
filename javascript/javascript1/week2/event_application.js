function getEventWeekday(numberDay){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    let i = today.getDay();

    let countOfDays = numberDay%7;

    console.log(countOfDays);

    if(countOfDays === 0){
        return "Event will be on " + days[i];
    }

    while (countOfDays!=0) {
        if(i==6){
            i=0;
            countOfDays--;
            continue;
        }
        i++;
        countOfDays--;
    }
    return "Event will be on " + days[i];
}

console.log(getEventWeekday(0));

