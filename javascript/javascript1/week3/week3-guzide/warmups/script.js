//Item array removal
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

let indexToRemove = names.indexOf(nameToRemove);
names.splice(indexToRemove, 1);

console.log(names);
console.log("-----------------------------------------");

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function travelDuration(travelinfo) {
  const hours = Math.floor(travelinfo.destinationDistance / travelinfo.speed);
  const minutes =
    ((travelinfo.destinationDistance / travelinfo.speed) * 60) % 60;
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = travelDuration(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
console.log("-----------------------------------------");

//Series duration of my life

const seriesDurations = [
  {
    title: "The Good Place",
    days: 5,
    hours: 11,
    minutes: 0,
  },
  {
    title: "Outlander",
    days: 3,
    hours: 19,
    minutes: 0,
  },
  {
    title: "Dark",
    days: 4,
    hours: 16,
    minutes: 40,
  },
];

function logOutSeriesText(seriesDurations) {
  // write code here
  const lifeSpanMinutes = 80 * 365 * 24 * 60;
  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const eachSerie = seriesDurations[i];
    const seriesMinutes =
      eachSerie.days * 24 * 60 + eachSerie.hours * 60 + eachSerie.minutes;
    const percentagePerSerie = (seriesMinutes * 100) / lifeSpanMinutes;
    totalPercentage += percentagePerSerie;
    console.log(
      eachSerie.title + "took " + percentagePerSerie.toFixed(3) + "% of my life"
    );
  }

  console.log(
    "\nIn total that is " + totalPercentage.toFixed(3) + "% of my life."
  );
}

logOutSeriesText(seriesDurations);
