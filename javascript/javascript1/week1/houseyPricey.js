
/*
a house that is 8m wide, 10m deep and 10m high. 
The garden size is 100m2.
The house costs 2.500.000. 
Julia is considering a house that is 5m wide, 11m deep and 8m high.
The garden size is 70m2. This house costs 1.000.000.
*/
// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

const houseWidth = 5;
const houseHeight = 11;
const houseDepth = 8;
const volumeInMeters = houseWidth * houseHeight * houseDepth
const gardenSizeInM2 = 70;
const housePrice = volumeInMeters * 2.5 * 1000 +  (gardenSizeInM2 * 300);
const PriceyOrCheap = housePrice == 1000000 ? `Peter and Julia are paying too much. The house should cost ${housePrice}` : `Peter and Julia are paying too little The house should cost ${housePrice}`
console.log(PriceyOrCheap)



