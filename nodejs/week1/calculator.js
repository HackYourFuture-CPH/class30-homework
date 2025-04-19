

const args = process.argv.slice(2); 

const operation = args[0]; 
const numbers = args.slice(1).map(Number);

if (numbers.some(isNaN)) {
  console.log("Error: All inputs after the operation must be numbers.");
  process.exit();
}

let result;

switch (operation) {
  case "add":
    result = numbers.reduce((acc, num) => acc + num, 0);
    break;
  case "sub":
    result = numbers.reduce((acc, num) => acc - num);
    break;
  case "mul":
    result = numbers.reduce((acc, num) => acc * num, 1);
    break;
  case "div":
    result = numbers.reduce((acc, num) => acc / num);
    break;
  default:
    console.log("Unknown operation. Use add, sub, mul, or div.");
    process.exit();
}

console.log("Result:", result);
