const peterHouse = {
    width: 8,
    depth: 10,
    height: 10,
    gardenSize: 100,
    price: 2500000,
}

const juliaHouse = {
    width: 5,
    depth: 11,
    height: 8,
    gardenSize: 70,
    price: 1000000,
}

const peterHouseIdealPrice = peterHouse.width * peterHouse.depth * peterHouse.height * 2.5 * 1000 + peterHouse.gardenSize * 300;
const juliaHouseIdealPrice = juliaHouse.width * juliaHouse.depth * juliaHouse.height * 2.5 * 1000 + juliaHouse.gardenSize * 300;

if (peterHouse.price <= peterHouseIdealPrice) {
    console.log("Peter is paying too little.");
}
else {
    console.log("Peter is paying too much.")
}

if (juliaHouse.price <= juliaHouseIdealPrice) {
    console.log("Julia is paying too little.");
}
else {
    console.log("Julia is paying too much.");
}