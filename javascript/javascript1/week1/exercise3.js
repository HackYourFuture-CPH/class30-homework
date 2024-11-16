//   Exercise 3 Housey pricey (A house price estimator)

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