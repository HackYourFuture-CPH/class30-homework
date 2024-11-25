const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

  const nameToRemove = "Ahmad";

  const index = names.indexOf(nameToRemove); // Find the index of the name to remove
if (index !== -1) {
  names.splice(index, 1);
}
  console.log(names);


  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function calculateTravelTime({speed, destinationDistance}){
  const travelInHour= destinationDistance/speed;
  const hours = Math.floor(timeInHours); // Extract whole hours
  const minutes = Math.round((timeInHours - hours) * 60); // Convert fractional hours to minutes
  return `${hours} hours and ${minutes} minutes`;
  }
  const travelTime= calculateTravelTime(travelInformation);
  console.log(travelTime);