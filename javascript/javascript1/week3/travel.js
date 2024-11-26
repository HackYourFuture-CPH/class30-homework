const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInfo) {
  const { speed, destinationDistance } = travelInfo;

  if (speed <= 0) {
    return "Error: Speed must be greater than 0";
  }

  const totalTimeInHours = destinationDistance / speed; // زمان به ساعت
  const hours = Math.floor(totalTimeInHours); // بخش ساعت
  const minutes = Math.round((totalTimeInHours - hours) * 60); // بخش دقیقه

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // خروجی: 8 hours and 38 minutes