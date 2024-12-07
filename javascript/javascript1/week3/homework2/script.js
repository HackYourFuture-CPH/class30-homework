
// SERIE DURATION

const seriesDurations = [
    {
      title: "Breaking Bad",
      days: 2,
      hours: 3,
      minutes: 40,
    }
  ];

// CALCULATING TIME OF SERIES IN HOURS


  const totalHoras = (seriesDurations[0].days * 24) + seriesDurations[0].hours + (seriesDurations[0].minutes / 60);

// CREATING ARRAY + OBJECT WITH MY INFO


  const lifeTime = [ {
    nombre: "Juan",
    days: 8760,
    },
    ];

// TRANSFORMING MY DAYS INTO HOURS

    const lifeHours = (lifeTime[0].days * 24);

 
// CALCULATING PERCENTAGE OF SEEN SERIES    

    const percentage = (totalHoras / lifeHours).toFixed(5) * 100;



 console.log("The total ammount of lived hours of " + lifeTime[0].nombre + " is " + lifeHours);
 console.log("The total ammount of watched hours are: " + totalHoras);
 console.log("The percentage of your life that you spend watching series is " + percentage + "%")


// I learn that ".toFixed(5)" limited the ammount of numbers of decimals that are shows
// I learn that ".toFixed(5)" limited the ammount of numbers of decimals that are shows
// I learn that ".toFixed(5)" limited the ammount of numbers of decimals that are shows
// I learn that ".toFixed(5)" limited the ammount of numbers of decimals that are shows