const seriesDurations = [
    {
      title: "Monster",
      days: 1,
      hours: 5,
      minutes: 36,
    },
    {
      title: "Gilmore Girls",
      days: 5,
      hours: 21,
      minutes: 48,
    },
    {
      title: "Samurai Shamploo",
      days: 6,
      hours: 8,
      minutes: 12,
    },
  ];
  
  const lifespan = 80; 
  const lifespanMinutes = lifespan * 365 * 24 * 60; 
  
  function getPercentage() {
    let result = ""; 
    let totalPercentage = 0; 

    for (let i = 0; i < seriesDurations.length; i++) {
      const series = seriesDurations[i];
      const totalSeriesMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
      
      // The percentage of life taken by a given series
      const percentage = (totalSeriesMinutes / lifespanMinutes) * 100;
  
      // Append the series information to the result
      result += `The series "${series.title}" has taken ${percentage.toFixed(3)}% of your life.\n`;
  
     
      totalPercentage += percentage;
    }
  
    
    result += `\nTotal percentage of life spent on all series: ${totalPercentage.toFixed(3)}%`;
  
    return result; 
  }
  
  console.log(getPercentage()); 
  