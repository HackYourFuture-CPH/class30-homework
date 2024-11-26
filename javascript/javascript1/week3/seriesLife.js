const seriesDurations = [
  {
    title: "Game of Thrones",
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
  const totalLifeMinutes = 80 * 365 * 24 * 60;
  console.log("Total Life Minutes: " + totalLifeMinutes); 
  let totalPercentage = 0; 

  for (const series of seriesDurations) {
    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    console.log(`Series: ${series.title}, Minutes: ${seriesMinutes}`); 

     if (isNaN(seriesMinutes)) {
      console.log("Invalid data for series:", series);
      continue; 
    }

    const percentage = (seriesMinutes / totalLifeMinutes) * 100;
    console.log(`Percentage for ${series.title}: ${percentage}`); 
    if (isNaN(percentage)) {
      console.log("Error: NaN detected for percentage calculation.");
    } else {
      console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
      totalPercentage += percentage;
    }
  }

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();


  