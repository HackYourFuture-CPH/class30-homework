// WARM UP TASK
const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];

const nameToRemove = 'Ahmad';

const indexToRemove = names.includes(nameToRemove);
if (indexToRemove !== 1) {
  names.splice(indexToRemove, 1);
}

console.log(names);

//TASK1 : When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(info) {
  const totalHours = info.destinationDistance / info.speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);

//TASK2 : Series duration of my life
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: 'How to get away with murder',
    days: 2,
    hours: 16,
    minutes: 30,
  },
  {
    title: 'See',
    days: 0,
    hours: 21,
    minutes: 12,
  },
  {
    title: 'Peacky Blinders',
    days: 1,
    hours: 9,
    minutes: 36,
  },
  {
    title: 'Gossip girl',
    days: 3,
    hours: 12,
    minutes: 42,
  },
];

function logOutSeriesText() {
  let averageLifespan = 80;
  const averageLiveMinutes = averageLifespan * 365.25 * 24 * 60;
  let totalPercentage = 0;

  seriesDurations.forEach(series => {
    const totalMinutes =
      (series.days * 24 * 60) + (series.hours * 24) + series.minutes;
      const lifePercentage = (totalMinutes / averageLiveMinutes) * 100;
      console.log(
        `${series.title} took ${lifePercentage.toFixed(3)}% of my life`,
      );
    totalPercentage += lifePercentage;
  });
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
