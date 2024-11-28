// Item array removal
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

  // Write some code here
  const indexOfNameToRemove = names.indexOf(nameToRemove);
  const numberOfNameToRemove = 1;
  names.splice(indexOfNameToRemove, numberOfNameToRemove)
  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//   When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTravelTime(informationInput){
    calculateTime = informationInput.destinationDistance / informationInput.speed
    travelHour = parseInt(Number(calculateTime))
    travelMinute = Math.round((Number(calculateTime)-travelHour) * 60); // Yay, Google helps me for formatting :)
    return travelHour + ' hours and ' + travelMinute + ' minutes' 
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes


//   Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: "How I met your mother",
    days: 3,
    hours: 4,
    minutes: 16,
  },
  {
    title: "Stranger things",
    days: 1,
    hours: 10,
    minutes: 18,
  },
  {
    title: "Sherlock",
    days: 0,
    hours: 18,
    minutes: 0,
  },
];

function logOutSeriesText() {
  let totalLifespan = 0;
  for(i = 0; i < seriesDurations.length; i++){
    let totalDaysOfSeries = seriesDurations[i].days + (seriesDurations[i].hours + seriesDurations[i].minutes / 60) / 24;
    let seriesLifespan = totalDaysOfSeries / (80 * 365 + 80 / 4) * 100;
    console.log(seriesDurations[i].title + " took " + seriesLifespan.toFixed(3) + "% of my life");
    totalLifespan += seriesLifespan;
  }
  console.log("In total that is " + totalLifespan.toFixed(2) + "% of my life");
}
  
logOutSeriesText(); 