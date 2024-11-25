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

  const index = names.indexOf(nameToRemove); // Find the index of the name to remove
if (index !== -1) {
  names.splice(index, 1);
}
  console.log(names);

//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
function calculateTravelTime({speed, destinationDistance}){
const timeInHours= destinationDistance/speed;
const hours = Math.floor(timeInHours); // Extract whole hours
const minutes = Math.round((timeInHours - hours) * 60); // Convert fractional hours to minutes
  return `${hours} hours and ${minutes} minutes`;
  }
const travelTime= calculateTravelTime(travelInformation);
console.log(travelTime);

//Series duration of my life

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
    }
  ];
function calculateSeriesTimePercentage(seriesDurations, averageLifespanYears) {
    const averageLifespanMinutes = averageLifespanYears * 365 * 24 * 60; // Convert lifespan to minutes
    let totalPercentage = 0;
  
    seriesDurations.forEach((series) => {
      const seriesMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes; // Convert series time to minutes
      const seriesPercentage = (seriesMinutes / averageLifespanMinutes) * 100;
      totalPercentage += seriesPercentage; // Add to total
      console.log(`${series.title} took ${seriesPercentage}% of my life`);
    });
  
    console.log(`In total that is ${totalPercentage}% of my life`);
  }
  
  calculateSeriesTimePercentage(seriesDurations, 31);

