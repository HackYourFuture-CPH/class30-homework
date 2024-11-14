const dogYearOfBirth = 2010;
const dogYearFuture = 2074;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear * 7;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + humanYear + " human years old in " + dogYearFuture
  );
}
