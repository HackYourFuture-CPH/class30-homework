const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function getTripDuration(obj){
     const durationInt = Math.floor(obj.destinationDistance / obj.speed *60);
     const durationHrs = Math.floor(durationInt/60);
     const durationMn = Math.floor(durationInt%60);
     let durationInfo = `${durationHrs}hours and ${durationMn}minutes`
     return obj.duration = durationInfo
  }

  const travelTime = getTripDuration(travelInformation);
  console.log(travelTime);