const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function getTripDuration(obj){
     durationInt = Math.floor(obj.destinationDistance / obj.speed *60);
     durationHrs = Math.floor(durationInt/60);
     durationMn = Math.floor(durationInt%60);
     durationInfo = `${durationHrs}hours and ${durationMn}minutes`
     return obj.duration = durationInfo
  }

  const travelTime = getTripDuration(travelInformation);
  console.log(travelTime);