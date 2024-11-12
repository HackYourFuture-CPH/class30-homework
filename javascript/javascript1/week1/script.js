//Age calculator

let yearOfBirth = 1995
let yearFuture = 2027
let age = yearFuture - yearOfBirth
console.log("You will be " + age + " years old in" + yearFuture)

//Goodboy-oldboy

let dogYearOfbirth = 2018;
let dogYearFuture = 2027;
let dogYear = yearFuture - yearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    let dogInDogYears = dogYear * 7;
    console.log("Your dog will be ${dogInDogYears} dog years old in 2027");
} else {
    console.log("Your dog will be ${dogYear} human years old in 2027");
}

//Housey pricey

const peterWidth = 8;
const peterHigh = 10;
const peterDeep = 10;
const peterGarden = 100 ** 2;
const peterHouse = 25000000;
const volumeInMeters1 = peterWidth * peterHigh * peterDeep;
const estimatePeterHouse = volumeInMeters1 * 2.5 * 1000 + peterGarden * 300;



if (estimatePeterHouse <= peterHouse) {
    console.log("The price is good.The estimate price is" + estimatePeterHouse);
} else {
    console.log("The price is too high. The estimate price is" + estimatePeterHouse);
}

const juliaWidth = 5;
const julieaHigh = 11;
const jualiaDeep = 8;
const juliaHouse = 1000000;
const juliaGarden = 70 ** 2;
const volumeInMeters2 = jualiaDeep * juliaWidth * julieaHigh
const hestimateJuliaHouse = volumeInMeters2 * 2.5 * 10000 + juliaGarden * 300;


if (estimatePeterHouse <= juliaHouse) {
    console.log("The price is good. The estimate price is" + estimatePeterHouse);
} else {
    console.log("The price is too high. The estimate price is" + estimatePeterHouse);
}

//