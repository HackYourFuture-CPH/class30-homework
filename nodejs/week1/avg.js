const args = process.argv.slice(2);
console.log(typeof args);
const numbers = args.map(arg => parseFloat(arg));

if(numbers.length === 0){
  console.log("Please enter some numbers!");
  process.exit();
}

