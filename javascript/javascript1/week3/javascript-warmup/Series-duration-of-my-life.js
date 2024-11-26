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
  ];
  
  function logOutSeriesText() {
    // write code here
    const eightyYearsIntoHours = 80 * 365 * 24;



    // gameOfThrones Variables
    const gameOfThronesdaysIntoHours = seriesDurations[0].days*24;
    const gameOfThronesHours = gameOfThronesdaysIntoHours + seriesDurations[0].hours;
    const gameOfThronespercentageOfLife = gameOfThronesHours / eightyYearsIntoHours ;
    
    
    //Sopranos Variables
    const sopranosdaysIntoHours = seriesDurations[1].days*24;
    const sopranosHours = sopranosdaysIntoHours + seriesDurations[1].hours;
    const sopranospercentageOfLife = sopranosHours / eightyYearsIntoHours ;


    //The Wire Variables
    const theWiredaysIntoHours = seriesDurations[2].days*24;
    const theWireHours = theWiredaysIntoHours + seriesDurations[2].hours;
    const theWirepercentageOfLife = theWireHours / eightyYearsIntoHours ;


    const total = gameOfThronespercentageOfLife + sopranospercentageOfLife + theWirepercentageOfLife;

    console.log(`${seriesDurations[0].title} took ${gameOfThronespercentageOfLife.toFixed(6)}% of my life `);
    console.log(`${seriesDurations[1].title} took ${sopranospercentageOfLife.toFixed(6)}% of my life `);
    console.log(`${seriesDurations[2].title} took ${theWirepercentageOfLife.toFixed(6)}% of my life `);
    console.log(`In total that is ${total.toFixed(6)} of my life`);


  }
  
  logOutSeriesText(); // logs out the text found above
  