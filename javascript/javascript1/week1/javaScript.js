//Age-ify (A future age calculator)
const yearOfBirth= 1993;
const yearFuture= 2050;
const age= yearFuture - yearOfBirth;
console.log("You will be " + age +" years old in " + yearFuture + ".");

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;
const dogYearInHumanYear = dogYearFuture - dogYearOfBirth;
const dogYearInDogYear = dogYearInHumanYear * 7;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogAgeInDogYears + "dog years old in" + dogYearFuture + ".");
} else {
    console.log("Your dog will be " + dogYearInHumanYear + "dog years old in" + dogYearFuture + ".");
}