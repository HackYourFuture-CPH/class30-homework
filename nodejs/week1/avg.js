/*/create a file named avg.js which will calculate the 
average of the numbers provided as command line arguments./*/
const input = process.argv.slice(2).map(Number); 

export default function getAverage(...numbers) { 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    const average = sum / numbers.length;
    return average;
};

console.log(getAverage(...input));

// Optional improvements and considerations:
//filter the values we pass thru getaverage 
const numbers = input.filter(num => !isNaN(num)); 
//put conditions? 
if (input.length === 0) {
    console.log("Please provide at least one number.");
    process.exit(1); 
}
if (numbers.length === 0) {
    console.log("No valid numbers provided.");
    process.exit(1);
}
