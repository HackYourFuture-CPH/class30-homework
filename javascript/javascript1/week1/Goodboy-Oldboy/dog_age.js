const dogYearOfBirth = 2018;
const dogYearFuture = 2028;
const dogYear = dogYearFuture - dogYearOfBirth;
const humanDogYear = dogYear * 7;

const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " + humanDogYear + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
}
