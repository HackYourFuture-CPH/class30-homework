const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
      title: "Succession",
      days: 1,
      hours: 13,
      minutes: 42,
    },
    {
      title: "Breaking Bad",
      days: 2,
      hours: 3,
      minutes: 40,
    },
    {
      title: "Better Call Saul",
      days: 2,
      hours: 1,
      minutes: 21,
    }
    
  ];
//the function should logout the following:
// Game of thrones took 0.01% of my life
//Sopranos took 0.012% of my life
//The Wire took 0.007% of my life

//In total that is 0.2% of my life

  function getRatioFromLife(show){
    const lifeMinutes = 80*365*24*60; // 80 years in minutes
    const showMinutes = (show.days * 24 * 60 )+ (show.hours * 60) + show.minutes; //Show duration in minutes
    let showRatio = showMinutes/lifeMinutes *100;
    return showRatio;
  }

  function logOutSeriesText(arr) {
    let totalPercentage = 0;
   for (let i =0; i< arr.length; i++) {
     const showRatio = getRatioFromLife(arr[i]);
     console.log(`${arr[i].title} took ${showRatio.toFixed(3)}% of my life `)
     totalPercentage += showRatio
   }
   return console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`)
  }
  
  logOutSeriesText(seriesDurations); 
  
  