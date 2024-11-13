const dogYearOfBirth = 2022;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const humanYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears == true) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "." );
}
else {
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture + ".");
}
