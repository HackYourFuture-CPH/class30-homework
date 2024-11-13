const widePeter = 8;
const deepPeter = 10;
const highPeter = 10;
const gardenSizeInM2Peter  = 100;
const houseCostsPeter = 2500000;

let volumeInMetersPeter = widePeter * deepPeter * highPeter;

let housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

if (houseCostsPeter > housePricePeter) {
    console.log("Peter is paying too much. The calculated house price is " + housePricePeter);
} else if (houseCostsPeter < housePricePeter) {
    console.log("Peter is paying too little. The calculated house price is " + housePricePeter);
} else {
    console.log("Peter is paying the exact price. The calculated house price is " + housePricePeter);
}

const wideJulia = 5;
const deepJulia = 11;
const highJulia = 8;
const gardenSizeInM2Julia = 70;
const houseCostsJulia = 1000000;

let volumeInMetersJulia = wideJulia * deepJulia * highJulia;

let housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

if (houseCostsJulia > housePriceJulia) {
    console.log("Julia is paying too much. The calculated house price is " + housePriceJulia);
} else if (houseCostsJulia < housePriceJulia) {
    console.log("Julia is paying too little. The calculated house price is " + housePriceJulia);
} else {
    console.log("Julia is paying the exact price. The calculated house price is " + housePriceJulia);
}

