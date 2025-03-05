const args = process.argv.slice(2);
//console.log(typeof args);
const numbers = args.map(arg => parseFloat(arg));

if(numbers.length === 0){
  console.log("Please enter some numbers!");
  process.exit(1);
}
if(numbers.some(isNaN)){
  console.log("Error: All inputs must be valid numbers.")
  process.exit(1);
}
let sum = 0;
numbers.forEach(i => {
  sum += i;
});
const avg = sum / numbers.length;
console.log(`Avrage: ${avg.toFixed(2)}`);