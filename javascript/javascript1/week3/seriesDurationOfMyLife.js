const seriesDurations = [
    { title: "Game of thrones", days: 5, hours: 14, minutes: 0 },
    { title: "Prison Break", days: 2, hours: 18, minutes: 0 },
    { title: "Gomorrah", days: 1, hours: 23, minutes: 0 },
  ];
  
  const averageLifeSpanInMinutes = 80 * 365 * 24 * 60;
  
  
  function logOutSeriesText() {
    let totalPercentage = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
      const series = seriesDurations[i];
      const totalMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
      const percentageOfLife = (totalMinutes / averageLifeSpanInMinutes) * 100;
      console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`);
      totalPercentage += percentageOfLife;
    }
    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
  }
  
  logOutSeriesText();
  