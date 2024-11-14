// Peter
const widthPeter = 8;
const depthPeter = 10;
const heightPeter = 10;
const gardenSizePeter = 100;
const actualPricePeter = 2500000;

//
const volumePeter = widthPeter * depthPeter * heightPeter;
// 
const housePricePeter = volumePeter * 2.5 * 1000 + gardenSizePeter * 300;

//
if (housePricePeter < actualPricePeter) {
    console.log("Peter is paying too much for the house.");
} else if (housePricePeter > actualPricePeter) {
    console.log("Peter is paying too little for the house.");
} else {
    console.log("Peter is paying the right price for the house.");
}








// Julia
const widthJulia = 5;
const depthJulia = 11;
const heightJulia = 8;
const gardenSizeJulia = 70;
const actualPriceJulia = 1000000;

//
const volumeJulia = widthJulia * depthJulia * heightJulia;
// 
const housePriceJulia = volumeJulia * 2.5 * 1000 + gardenSizeJulia * 300;

//
if (housePriceJulia < actualPriceJulia) {
    console.log("Julia is paying too much for the house.");
} else if (housePriceJulia > actualPriceJulia) {
    console.log("Julia is paying too little for the house.");
} else {
    console.log("Julia is paying the right price for the house.");
}


