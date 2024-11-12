//Age-ify (A future age calculator)
const yearOfBirth= 1993;
const yearFuture= 2050;
const age= yearFuture - yearOfBirth;
console.log("You will be " + age +" years old in " + yearFuture + ".");

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;
const dogYearInHumanYear = dogYearFuture - dogYearOfBirth;
const dogYearInDogYear = dogYearInHumanYear * 7;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYearInDogYear + " dog years old in " + dogYearFuture + ".");
} else {
    console.log("Your dog will be " + dogYearInHumanYear + " dog years old in " + dogYearFuture + ".");
}

//Housey pricey (A house price estimator)
let wide;
let deep;
let high;
let gardenSizeInM2;

//Peter
wide= 8;
deep= 10;
high= 10;
const volumeInMeters= wide* deep* high;
gardenSizeInM2= 100;
const peterHousePrice = 2500000;
const peterCalculatedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (peterHousePrice <= peterCalculatedHousePrice ) {
    console.log("Peter's house: The price is okay.");
} else {
    console.log("Peter's house: The price is too high.");
}

//Julia
wide= 5;
deep= 11;
high= 8;
gardenSizeInM2= 70;
const juliaHousePrice = 1000000;
const juliaCalculatedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (juliaHousePrice <= juliaCalculatedHousePrice) {
    console.log("Julia's house: The price is okay.");
} else {
    console.log("Julia's house: The price is too high.");
}