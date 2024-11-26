//ITEM ARRAY REMOVAL

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}

console.log(names);

//WHEN WILL WE BE THERE?

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(speed, destinationDistance) {
  let time = destinationDistance / speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time % 1) * 60);
  return `${hours} hours ${minutes} minutes`;
}
const travelTime = calculateTime(
  travelInformation.speed,
  travelInformation.destinationDistance
);
console.log(travelTime);

//SERIES DURATION OF MY LIFE

const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const averageLifespanInYears = 80;
  const hoursInAYear = 365 * 24;
  const totalLifespanInHours = averageLifespanInYears * hoursInAYear;

  let totalPercentage = 0;

  seriesDurations.forEach((series) => {
    const totalHours = series.days * 24 + series.hours + series.minutes / 60;
    const percentage = (totalHours / totalLifespanInHours) * 100;
    totalPercentage += percentage;

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  });

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
