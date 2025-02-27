
const arg = process.argv.slice(2);

const numbers = arg.map(Number).filter(num => !isNaN(num));


if (numbers.length === 0) {
    console.log("Error: Please provide at least one valid number.");
} else {
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    

    const average = sum / numbers.length;

    console.log(`Average: ${average}`);
}