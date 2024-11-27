const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Silo",
        days: 0,
        hours: 16,
        minutes: 40,
    },
    {
        title: "Friends",
        days: 3,
        hours: 11,
        minutes: 36,
    },
    {
        title: "How I Met Your Mother",
        days: 3,
        hours: 4,
        minutes: 16,
    }
];

function howMuchTimeHaveIWasted(listOfShows) {

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let logOutSeriesText = "";
    let totalTime = 0;
    for (let item of listOfShows) {

        days += item.days;
        hours += item.hours;
        if (hours >= 24) {
            days += Math.floor(hours / 24);
            hours = hours % 24;
        }
        minutes += item.minutes;
        if (minutes >= 60) {
            hours += Math.floor(minutes / 60)
            minutes = minutes % 60;
        }
        let showTotalTime = days + (hours / 24) + (minutes / 1440);
        let percentage = (showTotalTime / 29200) * 100
        totalTime += percentage;
        logOutSeriesText += `${item.title} took ${percentage.toFixed(4)}% of my life \n`
    }
    logOutSeriesText = `${logOutSeriesText}\nIn total that is ${totalTime.toFixed(2)}% of my life `

    return logOutSeriesText;
}

console.log(howMuchTimeHaveIWasted(seriesDurations))