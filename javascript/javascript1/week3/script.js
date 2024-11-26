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

//TASK: When will we be there??

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
