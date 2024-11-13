//FCC account: @ruslanaonshchk

// Task: Smart-ease : Age-ify (A future age calculator)

const yearOfBirth = 2001;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture);

// Task : Goodboy-Oldboy (A dog age calculator)

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
