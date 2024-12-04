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
  },
];

function howMuchTimeHaveIWasted(listOfShows) {
  const totalLifeInMinutes = 29200 * 365 * 24 * 60;
  let logOutSeriesText = "";
  let totalTimeInMinutes = 0;
  for (let item of listOfShows) {
    let showMinutes = item.days * 24 * 60 + item.hours * 60 + item.minutes;
    totalTimeInMinutes += showMinutes;

    let percentage = (showMinutes / totalLifeInMinutes) * 100;
    logOutSeriesText += `${item.title} took ${percentage.toFixed(
      9
    )}% of my life \n`;
  }
  let totalPercentage = (totalTimeInMinutes / totalLifeInMinutes) * 100;
  logOutSeriesText += `\nIn total that is ${totalPercentage.toFixed(
    9
  )}% of my life`;

  return logOutSeriesText;
}

console.log(howMuchTimeHaveIWasted(seriesDurations));
