//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;
const dogYearInHumanYear = dogYearFuture - dogYearOfBirth;
const dogYearInDogYear = dogYearInHumanYear * 7;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYearInDogYear + " dog years old in " + dogYearFuture + ".");
} else {
    console.log("Your dog will be " + dogYearInHumanYear + " dog years old in " + dogYearFuture + ".");
}