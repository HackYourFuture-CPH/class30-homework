// #1 Item array removal

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
  const nameToRemove = "Ahmaad";
  
  // Write some code here
  
  function removeName(name){
    if(typeof(name) === "string" && name!= ""){

      let indexOfName = names.indexOf(name);
      if(indexOfName === -1){
        console.log("Error! Incorrect name");
        return 0; 
      } 
      else{
        names.splice(indexOfName, 1);
      }
    } 
    else{
      return "Error! Incorrect name";
    }
    
  }

  removeName(nameToRemove);

  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



  // #2 Speed function 

  function calculateTime({speed, destinationDistance}){
    x = typeof(speed) === "number" && typeof(destinationDistance) === "number";
    y = speed >0 && destinationDistance > 0;
    if(x && y){
      let time = destinationDistance/speed;
      
      const hours = Math.floor(time);
      const minutes = Math.round((time - hours) * 60);

      return `\nTravel time: ${hours} hours and ${minutes} minutes\n`;
    } else {
      return "Error"
    }
  }

  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = calculateTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes


//   #3 Series duration of my life

const seriesDurations = [
    {
      title: "Friends",
      days: 3,
      hours: 11,
      minutes: 36,
    },
    {
      title: "Doctor",
      days: 0,
      hours: 11,
      minutes: 0,
    },
    {
      title: "The closed school",
      days: 4,
      hours: 22,
      minutes: 24,
    },
  ];
  
  function logOutSeriesText() {
    const lifespan = 80;
    const lifespanInMinutes = lifespan * 365.25 * 24 * 60;

    let seriesDurationsInMinutes = 0;
    for(let i = 0; i < seriesDurations.length; i++){
        const timeOfSeries = ((seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes);
        let timeOfLife = ((timeOfSeries/lifespanInMinutes) * 100);

        seriesDurationsInMinutes+= timeOfSeries;

        console.log(`${seriesDurations[i].title} took ${timeOfLife.toFixed(3)}% of my life`);
    }
    
    let timeOfLife = ((seriesDurationsInMinutes/lifespanInMinutes) * 100).toFixed(3);
    console.log(`In total that is ${timeOfLife}% of my life`);
  }
  
  logOutSeriesText(); // logs out the text found above