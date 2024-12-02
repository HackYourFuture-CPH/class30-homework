const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelDuration(info){
  const totalHours = info.destinationDistance / info.speed;
  const hour = Math.floor (totalHours);
  const timeInMinutes = Math.trunc((totalHours - hour)*60);
  if (hour === 0 )
    return `${timeInMinutes} minutes`
  else return `${hour} hours and ${timeInMinutes} minutes`
}

const travelTime = travelDuration(travelInformation);
console.log(travelTime);