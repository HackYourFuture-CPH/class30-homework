// Exercise 2 Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2005;
let dogYearFuture = 2024;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYears = true;

shouldShowResultInDogYears
	? console.log(
			"Your dog will be " + dogYear + " dog years old in " + dogYearFuture
	  )
	: console.log(
			"Your dog will be " + dogYear / 7 + " dog years old in " + dogYearFuture
	  );