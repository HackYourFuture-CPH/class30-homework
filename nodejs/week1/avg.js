const numbersList = process.argv.slice(2);

const numbers = [];
for (let i = 0; i < numbersList.length; i++) {
  numbers.push(Number(numbersList[i]));
}

if (numbers.length === 0) {
  console.log("Please enter the numbers");
  process.exit();
}

if (numbers.some(isNaN)) {
  console.log("Error: Invalid numbers");
  process.exit();
}

let sum = 0;
numbers.forEach((i) => {
  sum += i;
  return sum;
});
const average = sum / numbers.length;

console.log("The sum of the numbers is: " + sum);
console.log("The avaerage of the numbers is: " + average);
