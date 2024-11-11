// Exercise 1 My freeCodeCamp account:
// @andrpavl

// Exercice 2 Age-ify (A future age calculator)

const yearOfBirth = 1988;
let yearFuture = 2047;

const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

// Exercise 3 Goodboy-Oldboy (A dog age calculator)

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

//   Exercise 4 Housey pricey (A house price estimator)

const calcVolumeInMeters = (width, depth, height) => {
	return width * depth * height;
};

// Calculating for Peter

const gardenSizeInM2Peter = 100;
const houseCostsPeter = 2500000;
const housePricePeter =
	calcVolumeInMeters(8, 10, 10) * 2.5 * 1000 + gardenSizeInM2Peter * 300;
// console.log(housePricePeter);

if (houseCostsPeter > housePricePeter) {
	console.log(
		"Peter pays " + (houseCostsPeter - housePricePeter) + " too much"
	);
} else if (houseCostsPeter < housePricePeter) {
	console.log(
		"Peter pays " + (housePricePeter - houseCostsPeter) + " too little"
	);
} else {
	console.log("Peter pays a good price");
}

// Calculating for Julia

const gardenSizeInM2Julia = 70;
const houseCostsJulia = 1000000;
const housePriceJulia =
	calcVolumeInMeters(5, 11, 8) * 2.5 * 1000 + gardenSizeInM2Julia * 300;
// console.log(housePriceJulia);

if (houseCostsJulia > housePriceJulia) {
	console.log(
		"Julia pays " + (houseCostsJulia - housePriceJulia) + " too much"
	);
} else if (houseCostsJulia < housePriceJulia) {
	console.log(
		"Julia pays " + (housePriceJulia - houseCostsJulia) + " too little"
	);
} else {
	console.log("Julia pays a good price");
}

// Exercise 4 Ez Namey (Startup name generator)

const randomNumber = Math.floor(Math.random() * 10);
const firstWords = [
	"Easy",
	"Awesome",
	"Corporate",
	"Modern",
	"Cool",
	"Cute",
	"Cozy",
	"Crazy",
	"Big",
	"New",
];
const secondWords = [
	"Way",
	"Bussiness",
	"Startup",
	"Deal",
	"Future",
	"Life",
	"Day",
	"Adventure",
	"Fairytale",
	"Prank",
];

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
	'The startup: "' +
		startupName +
		'" contains ' +
		startupName.length +
		" characters"
);
