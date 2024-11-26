const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelDuration(info){
  const time = info.destinationDistance / info.speed;
  const hour = Math.floor (time);
  const min = Math.trunc((time - hour)*60);
  return `${hour} hours and ${min} minutes`
}

const travelTime = travelDuration(travelInformation);
console.log(travelTime);