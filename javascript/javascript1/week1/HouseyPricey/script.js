const peterVolumeInMeters = 8*10*10;
const peterGardenSizeInM2 = 100;

const housePeter = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;


const juliaVolumeInMeters = 5*11*8;
const juliaGardenSizeInM2 = 70;

const houseJulia = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;


if  (housePeter > 2500000) {
        console.log("The price of the house that Peter found should cost " + housePeter + " ... I consider it so expensive");}
        else{
            console.log("The price of the house that Peter found should cost " + housePeter + " ... I consider it a good price.")
        }
    

if  (houseJulia > 1000000) {
        console.log("The price of the house that Julia found should cost around " + houseJulia + "... I consider it so expensive");}
        else{
            console.log("The price of the house that Julia found should cost around " + houseJulia + "... I consider it a good price")
        }
    



// Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 
// Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.
// Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.