const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sherlock",
    days: 0,
    hours: 18,
    minutes: 0,
  },
  {
    title: "Vikings",
    days: 4,
    hours: 13,
    minutes: 0,
  },
];
const myAge = 29;

function calculateLifeSpentOnSeries(seriesArray, age) {
  const ageInHour = age * 365.25 * 24;
  for (let i = 0; i < seriesArray.length; i++) {
    const seriesInHour = seriesArray[i].days * 24 + seriesArray[i].hours;
    const percentage = (seriesInHour / ageInHour * 100).toFixed(4);
    console.log(`${seriesArray[i].title} took ${percentage}% of my life`);
  }
}

calculateLifeSpentOnSeries(seriesDurations, myAge);