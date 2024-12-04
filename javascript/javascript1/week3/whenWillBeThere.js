function estimatedArrivalTime(tInformation) {
  const totalTime = tInformation.destinationDistance / tInformation.speed;
  const hours = Math.floor(totalTime);
  const minutes = Math.round((totalTime - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = estimatedArrivalTime(travelInformation);
console.log(travelTime);
