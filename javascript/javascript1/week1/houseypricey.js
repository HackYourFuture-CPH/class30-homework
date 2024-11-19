const height1 = 10;
const width1 = 8;
const depth1 = 10;
const size1 = 100;
const volume1 = width1 * depth1 * height1;
const height2 = 8;
const width2 = 5;
const depth2 = 11;
const size2 = 70;
const volume2 = width2 * depth2 * height2;
const house1 = volume1 * 2.5 * 1000 + size1  * 300;
const house2 = volume2 * 2.5 * 1000 + size2 * 300;
let comment; 
if (house1 === 2500000) {
    comment = "Your house is the right price";}
if (house1 < 2500000)
   { comment = "It's actually cheaper!";}
else { comment = "Nah, it's a rip-off";} 
console.log("house1:", comment);

if (house2 === 1000000) {
    comment = "Your house is the right price";}
if (house1 < 1000000)
   { comment = "It's actually cheaper";}
else { comment = "Nah, it's a rip-off";} 
console.log("house2:", comment);