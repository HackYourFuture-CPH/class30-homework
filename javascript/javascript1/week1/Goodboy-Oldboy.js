const dogYearOfBirth = 2017
const dogYearFuture = 2027

const dogYear = dogYearFuture - dogYearOfBirth; 


const shouldShowResultInDogYears = prompt("Enter (true) for dog years or (false) for human years");

if (shouldShowResultInDogYears == "true")  {

    alert("Your dog will be " + dogYear*7 + " dog years old in " + dogYearFuture);
} else {
    alert("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}