let dogYearOfBirth = 2014;
let dogYearFuture = 2025;
let dogYear = 7;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
    let result = (dogYearFuture - dogYearOfBirth) * dogYear;
    console.log(`Your  dog will be ${result} human years old in ${dogYearFuture}`)
} else if(shouldShowResultInDogYears === false){
    result = dogYearFuture - dogYearOfBirth;
    console.log(`Your  dog will be ${result} years old in ${dogYearFuture}`)
}