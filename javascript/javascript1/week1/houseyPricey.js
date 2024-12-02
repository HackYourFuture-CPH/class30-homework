/*
a house that is 8m wide, 10m deep and 10m high. 
The garden size is 100m2.
The house costs 2.500.000. 
Julia is considering a house that is 5m wide, 11m deep and 8m high.
The garden size is 70m2. This house costs 1.000.000.
*/
// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const housePeterConsider = {
  houseWidth: 8,
  houseHeight: 10,
  houseDepth: 10,
  gardenSizeInM2: 100,
  getVolumeInMeters() {
    return this.houseWidth * this.houseHeight * this.houseDepth;
  },
  getHousePrice() {
    return this.getVolumeInMeters() * 2.5 * 1000 + this.gardenSizeInM2 * 300;
  },
  priceyOrCheap() {
    return this.getHousePrice() == 2500000
      ? `Peter is paying too much. The house should cost ${this.getHousePrice()}`
      : `Peter is paying too little The house should cost ${this.getHousePrice()}`;
  },
};
const houseJuliaConsider = {
  houseWidth: 5,
  houseHeight: 11,
  houseDepth: 8,
  gardenSizeInM2: 70,
  getVolumeInMeters() {
    return this.houseWidth * this.houseHeight * this.houseDepth;
  },
  getHousePrice() {
    return this.getVolumeInMeters() * 2.5 * 1000 + this.gardenSizeInM2 * 300;
  },
  priceyOrCheap() {
    let isItPricyOrCheap =
      this.getHousePrice() == 1000000
        ? `Julia is paying too much. The house should cost ${this.getHousePrice()}`
        : `Julia is paying too little The house should cost ${this.getHousePrice()}`;
    return isItPricyOrCheap;
  },
};

console.log(
  `${housePeterConsider.priceyOrCheap()} \n ${houseJuliaConsider.priceyOrCheap()}`
);
