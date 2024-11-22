function dressForTheWeather (temperature){
  if (temperature > -10 && temperature <= 10) {
    return 'Wear a Jacket, Hat and Gloves';
  } else if (temperature > 10 && temperature <= 20) {
    return 'Wear Pants and Long Sleeves';
  } else if (temperature > 20 && temperature <= 40) {
    return 'Wear Shorts and a T-Shirt';
  } else {
    return 'Stay Home! The weather is extreme!';
  }
}

const clothesToWear = dressForTheWeather(18);
console.log(clothesToWear);

//Here I used prompt for more practice :)
//const temperature = parseInt(prompt('Enter the temperature in °C'))
//console.log(dressForTheWeather(temperature));