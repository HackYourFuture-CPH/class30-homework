
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true; 
const dogHumanYears = dogYearFuture - dogYearOfBirth;
const dogDogYears = dogHumanYears * 7;
let dogYear; 
if (shouldShowResultInDogYears) {
  dogYear = "Your dog will be " + dogDogYears + " dog years old in " + dogYearFuture + ".";
} else {
  dogYear = "Your dog will be " + dogHumanYears + " human years old in " + dogYearFuture + ".";
}

console.log(dogYear);


 