
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
    let totalLifePercentage = 0;
    const averageLifeExpectancyInDays = 80 * 365; // 80 years, assuming 365 days per year
    
    for (let i = 0; i < seriesDurations.length; i++) {
      const series = seriesDurations[i];
      const totalMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
      const percentageOfLife = (totalMinutes / (averageLifeExpectancyInDays * 24 * 60)) * 100;
      totalLifePercentage += percentageOfLife;
      
      console.log(`${series.title} took ${percentageOfLife.toFixed(5)}% of my life`);
    }
    
    console.log(`In total that is ${totalLifePercentage.toFixed(5)}% of my life`);
  }
  
  logOutSeriesText();