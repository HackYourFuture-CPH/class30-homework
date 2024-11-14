const peterHouse = {
  customername: "Peter",
  width: 8,
  depth: 10,
  height: 10,
  gardenSizeInM2: 100,
  currentPrice: 2500000,
};

const peterVolume = peterHouse.width * peterHouse.depth * peterHouse.height;

const peterExpectedPrice =
  peterVolume * 2.5 * 1000 + peterHouse.gardenSizeInM2 * 300;

if (peterHouse.currentPrice > peterExpectedPrice) {
  console.log(
    "Hi " +
      peterHouse.customername +
      ", you are lucky! you are paying too little :) It is only " +
      peterExpectedPrice +
      "kr"
  );
} else
  console.log(
    "Hi " +
      peterHouse.customername +
      ", you are paying too much :/ It is " +
      peterExpectedPrice +
      "kr"
  );

const juliaHouse = {
  customername: "Julia",
  width: 8,
  depth: 10,
  height: 10,
  gardenSizeInM2: 70,
  currentPrice: 1000000,
};

const juliaVolume = juliaHouse.width * juliaHouse.depth * juliaHouse.height;

const juliaExpectedPrice =
  juliaVolume * 2.5 * 1000 + juliaHouse.gardenSizeInM2 * 300;

if (juliaHouse.currentPrice > juliaExpectedPrice) {
  console.log(
    "Hi " +
      juliaHouse.customername +
      ", you are lucky! you are paying too little :) It is only " +
      juliaExpectedPrice +
      "kr"
  );
} else
  console.log(
    "Hi " +
      juliaHouse.customername +
      ", you are paying too much :/ It is" +
      juliaExpectedPrice +
      "kr"
  );
