const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function calcTravelTime(travelInformation){

    const hoursWithDecimals = travelInformation.destinationDistance / travelInformation.speed
    const hoursWithOutDecimals = Math.floor(hoursWithDecimals);
    const minutesWithDecimals = (hoursWithDecimals - hoursWithOutDecimals)* 60 ;
    const minutesWithOutDecimals = Math.round(minutesWithDecimals);
    console.log(`${hoursWithOutDecimals} hours and ${minutesWithOutDecimals} minutes`);
  }
  
  const travelTime = calcTravelTime(travelInformation);
 


