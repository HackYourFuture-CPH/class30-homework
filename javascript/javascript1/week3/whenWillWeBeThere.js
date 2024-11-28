const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const timeInHours = travelInformation.destinationDistance / travelInformation.speed;
const hours = Math.floor(timeInHours);
const minutes = Math.round((timeInHours - hours) * 60);

console.log(hours + " hours " + minutes + " minutes");
  