const myNumbers = process.argv.slice(2);
let sum = 0;

for (let i = 0; i < myNumbers.length; i++) {
  sum += Number(myNumbers[i]);
}

let average = sum / myNumbers.length || 0;
console.log(`Average: ${average}`);
