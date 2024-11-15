const dogYearOfBirth = 2028;
const dogYearFuture = 2088;
const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
}
