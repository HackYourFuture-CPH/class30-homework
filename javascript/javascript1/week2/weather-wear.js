function dressForTheWeather (temperature){
  return temperature > -10 && temperature <= 10 ? 'Wear a Jacket, Hat and Gloves' :
         temperature > 10 && temperature <= 20 ? 'Wear Pants and Long Sleeves':
         temperature > 20 && temperature <= 40 ? 'Wear Shorts and a T-Shirt':
         'Stay Home! The weather is extreme!'
}

const clothesToWear = dressForTheWeather(18);
console.log(clothesToWear);

//Here I used prompt for more practice :)
//const temperature = parseInt(prompt('Enter the temperature in °C'))
//console.log(dressForTheWeather(temperature));