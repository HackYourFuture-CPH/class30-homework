const yearOfBirth=1987;
const yearFuture=2045;
const age=yearFuture - yearOfBirth;
console.log("my age is"  + " " +  age + " " +  "for future");



let dogYearOfBirth=2024;
let dogYearFuture=2045;

 let shouldShowResultInDogYears=true;
let dogAgeInHumanYears=dogYearFuture - dogYearOfBirth;
 let dogAgeInDogYears= dogAgeInHumanYears * 7;

if(shouldShowResultInDogYears){
    console.log(dogAgeInDogYears);
}
else{
    console.log(dogAgeInHumanYears);
}




let volumeInMetersPeter = 8 * 10 * 10; 
let gardenSizePeter = 100;
let actualPricePeter = 2500000;


let volumeInMetersJulia = 5 * 11 * 8;
let gardenSizeJulia = 70;
let actualPriceJulia = 1000000;


let estimatedPricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizePeter * 300;
let estimatedPriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeJulia * 300;


if (actualPricePeter > estimatedPricePeter) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is paying a fair price for the house.");
}

if (actualPriceJulia > estimatedPriceJulia) {
  console.log("Julia is paying too much for the house.");
} 
else {
  console.log("Julia is paying a fair price for the house.");
}



let firstWords = ["Easy", "Awesome", "Corporate", "Tech", "Creative", "Smart", "Innovative", "Future", "Next", "Quantum"];
let secondWords = ["Solutions", "Systems", "Dynamics", "Design", "Labs", "Ventures", "Concepts", "Partners", "Works", "Global"];


const randomFirstIndex = Math.floor(Math.random() * firstWords.length); 
const randomSecondIndex = Math.floor(Math.random() * secondWords.length);


let startupName = firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];


console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters.");
