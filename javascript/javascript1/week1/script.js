//FCC account: @ruslanaonshchk

// TASK: Smart-ease : Age-ify (A future age calculator)

const yearOfBirth = 2001;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture);

// TASK : Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2019;
let dogYearFuture = 2025;
const dogYear = 7;
const shouldShowResultInDogYears = true;

// Calculate the dog's age in human years
let dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;

// Calculate the dog's age in dog years
let dogAgeInDogYears = dogAgeInHumanYears * dogYear;

if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`,
  );
} else {
  console.log(
    `Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`,
  );
}

// TASK : Housey pricey (A house price estimator)

let peterPrice = 2500000;
let juliaPrice = 1000000;

let peterEstimatedPrice = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
let juliaEstimatedPrice = 5 * 8 * 11 * 2.5 * 1000 + 70 * 300;

console.log(
  peterPrice > peterEstimatedPrice
    ? `Peter is paying too much. Estimated price: ${peterEstimatedPrice}, but he is paying: ${peterPrice}.`
    : `Peter is paying too little. Estimated price: ${peterEstimatedPrice}, and he is paying: ${peterPrice}.`,
);

console.log(
  juliaPrice > juliaEstimatedPrice
    ? `Julia is paying too much. Estimated price: ${juliaEstimatedPrice}, but she is paying: ${juliaPrice}.`
    : `Julia is paying too little. Estimated price: ${juliaEstimatedPrice}, and she is paying: ${juliaPrice}.`,
);

// TASK : Ez Namey (Startup name generator) Optional

const randomNumber = Math.floor(Math.random() * 10);

const firstWords = [
  'Easy',
  'Awesome',
  'Corpporate',
  'New',
  'Cool',
  'Funny',
  'Serious',
  'Juzzy',
  'Fuzzy',
  'Fabious',
];

const secondWords = [
  'Tech',
  'Hub',
  'Corporation',
  'Innovation',
  'Global',
  'Industries',
  'IT',
  'Animals',
  'Academy',
  'Strangers',
];

const startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    ' characters',
);
