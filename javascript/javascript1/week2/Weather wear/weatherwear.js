let temperatureAtYourLocation = prompt(
  "Please enter the current temperature at your location"
);

temperatureAtYourLocation = parseInt(temperatureAtYourLocation);

function weatherBasedClothesToWear(outsideTemperature) {
  if (outsideTemperature >= 20) {
    return "You're suggested to wear casual clothes";
  } else if (outsideTemperature < 20 && outsideTemperature >= 10) {
    return "You're suggested to wear thin layered jackets above your clothes";
  } else if (outsideTemperature < 10 && outsideTemperature >= 0) {
    return "You must wear hat, gloves and jackets";
  } else {
    return "Stay calm at home and enjoy the snow with the family";
  }
}

const clothesToWear = weatherBasedClothesToWear(temperatureAtYourLocation);
console.log(clothesToWear);
