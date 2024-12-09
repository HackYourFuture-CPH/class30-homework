const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function getTripDuration(obj){
     const durationInt = Math.floor(obj.destinationDistance / obj.speed *60);
     const durationHrs = Math.floor(durationInt/60);
     const durationMn = Math.floor(durationInt%60);

     const hoursText = durationHrs >= 2 ? "hours" : "hour";
     const minutesText = durationMn >=2 ? "minutes" : "minute";

     let durationInfo = `${durationHrs}${hoursText} and ${durationMn}${minutesText}`
     return obj.duration = durationInfo
  }

  const travelTime = getTripDuration(travelInformation);
  console.log(travelTime);