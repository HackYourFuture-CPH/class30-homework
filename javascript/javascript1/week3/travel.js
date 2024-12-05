const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInfo) {
  const { speed, destinationDistance } = travelInfo;

  if (speed <= 0) {
    return "Error: Speed must be greater than 0";
  }

  const totalTimeInHours = destinationDistance / speed;
  const totalTimeInMinutes = totalTimeInHours * 60; // Time in minutes
  return totalTimeInMinutes;
}