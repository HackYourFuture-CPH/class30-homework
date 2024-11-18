const peterHouseWidthInM2 = 8;
const peterHouseDepthInM2 = 10;
const peterHouseHeightInM2 = 10;
const peterHouseVolumeInMeters =
  peterHouseDepthInM2 * peterHouseHeightInM2 * peterHouseWidthInM2;
const peterGardenSizeInM2 = 100;

const peterHouseActualPrice = 2500000;

const peterHouseExpectedPrice =
  peterHouseVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

if (peterHouseActualPrice < peterHouseExpectedPrice) {
  console.log(
    "Peter's estimated house price " +
      peterHouseExpectedPrice +
      " is too much than the actual price " +
      peterHouseActualPrice
  );
} else if (peterHouseActualPrice === peterHouseExpectedPrice) {
  console.log("Peter is paying exactly the same amount as offered");
} else {
  console.log(
    "Peter's estimated house price " +
      peterHouseExpectedPrice +
      " is too little than the actual price " +
      peterHouseActualPrice
  );
}

const juliaHouseWidthInM2 = 5;
const juliaHouseDepthInM2 = 11;
const juliaHouseHeightInM2 = 8;
const juliaHouseVolumeInMeters =
  juliaHouseDepthInM2 * juliaHouseHeightInM2 * juliaHouseWidthInM2;
const juliaGardenSizeInM2 = 70;

const juliaHouseActualPrice = 1000000;

const juliaHouseExpectedPrice =
  juliaHouseVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;

if (juliaHouseActualPrice < juliaHouseExpectedPrice) {
  console.log(
    "Julia's estimated house price " +
      juliaHouseExpectedPrice +
      " is too much than the actual price " +
      juliaHouseActualPrice
  );
} else if (juliaHouseActualPrice === juliaHouseExpectedPrice) {
  console.log("Julia is paying exactly the same amount as offered");
} else {
  console.log(
    "Julia's estimated house price " +
      juliaHouseExpectedPrice +
      " is too little than the actual price " +
      juliaHouseActualPrice
  );
}
