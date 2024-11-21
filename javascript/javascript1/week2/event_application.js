function getEventWeekday(numberDay){
    let i = today.getDay();
    while (numberDay!=0) {
        if(i==6){
            i=0;
            numberDay--;
            continue;
        }
        i++;
        numberDay--;
    }
    return("Event will be on " + days[i]);
}

const today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(getEventWeekday(31));

