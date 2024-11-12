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
let volumeInMeters= wide* deep* high;
let gardenSizeInM2;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//Peter
wide= 8;
deep= 10;
high= 10;
gardenSizeInM2= 100;
const peterHousePrice = 2500000;

if (peterHousePrice <= housePrice) {
    console.log("The price is okay.");
} else {
    console.log("The price is too high.");
}

//Julia
wide= 5;
deep= 11;
high= 8;
gardenSizeInM2= 70;
const juliaHousePrice = 1000000;

if (juliaHousePrice <= housePrice) {
    console.log("The price is okay.");
} else {
    console.log("The price is too high.");
}