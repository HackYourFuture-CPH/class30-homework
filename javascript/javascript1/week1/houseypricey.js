    
const house1 = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
const house2 = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;
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