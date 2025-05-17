// Excluding "node" and script name
const args = process.argv.slice(2);

// Convert to numbers
const numbers = args.map(Number).filter(n => !isNaN(n));

if (numbers.length>0) {
    console.log(numbers.reduce((a, b) => a + b, 0) / numbers.length);
    
} else {
    console.log("Please provide valid numbers.");
}