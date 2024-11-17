//FCC account: @ruslanaonshchk

// TASK: Smart-ease : Age-ify (A future age calculator)

const yearOfBirth = 2001;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture);

// TASK : Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2019;
let dogYearFuture = 2025;
const dogYear = 7;
const shouldShowResultInDogYears = true;

// Calculate the dog's age in human years
const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;

// Calculate the dog's age in dog years
const dogAgeInDogYears = dogAgeInHumanYears * dogYear;

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

let houses = [
  {
    name: 'Peter',
    width: 8,
    depth: 10,
    height: 10,
    gardenSize: 100,
    price: 2500000,
  },
  {
    name: 'Julia',
    width: 5,
    depth: 11,
    height: 8,
    gardenSize: 70,
    price: 1000000,
  },
];

houses.forEach(house => {
  let estimatedPrice =
    house.width * house.depth * house.height * 2.5 * 1000 +
    house.gardenSize * 300;

  if (house.price > estimatedPrice) {
    console.log(
      `${house.name} is paying too much. Estimated price: ${estimatedPrice}, but they are paying: ${house.price}.`,
    );
  } else {
    console.log(
      `${house.name} is paying too little. Estimated price: ${estimatedPrice}, and they are paying: ${house.price}.`,
    );
  }
});

// TASK : Ez Namey (Startup name generator) Optional

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

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

const startupName =
  firstWords[randomNumber1] + ' ' + secondWords[randomNumber2];

console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    ' characters',
);
