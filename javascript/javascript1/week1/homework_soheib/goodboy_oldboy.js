let dogYearOfBirth = 2014;
let dogYearFuture = 2025;
let dogYear = 7;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    let result = (dogYearFuture - dogYearOfBirth) * dogYear;
    console.log(`Your dog will be ${result} human years old in ${dogYearFuture}`)
} else {
    let result = dogYearFuture - dogYearOfBirth;
    console.log(`Your dog will be ${result} years old in ${dogYearFuture}`)
}