const customerArray = [
  (peterHouse = {
    customername: "Peter",
    width: 8,
    depth: 10,
    height: 10,
    gardenSizeInM2: 100,
    currentPrice: 2500000,
  }),
  (juliaHouse = {
    customername: "Julia",
    width: 8,
    depth: 10,
    height: 10,
    gardenSizeInM2: 70,
    currentPrice: 1000000,
  }),
];

function houseVolumeCalculator(customer) {
  return customer.width * customer.depth * customer.height;
}

function expectedPriceCalculator(volume, gardenSize) {
  return volume * 2.5 * 1000 + gardenSize * 300;
}

function compareAndPrint(currentPrice, expectedPrice, name) {
  if (currentPrice > expectedPrice) {
    console.log(
      "Hi " +
        name +
        ", you are lucky! you are paying too little :) It is only " +
        expectedPrice +
        "kr"
    );
  } else
    console.log(
      "Hi " +
        name +
        ", you are paying too much :/ It is " +
        expectedPrice +
        "kr"
    );
}

for (let i = 0; i < customerArray.length; i++) {
  const houseVolume = houseVolumeCalculator(customerArray[i]);
  const expectedPrice = expectedPriceCalculator(
    houseVolume,
    customerArray[i].gardenSizeInM2
  );
  compareAndPrint(
    customerArray[i].currentPrice,
    expectedPrice,
    customerArray[i].customername
  );
}
