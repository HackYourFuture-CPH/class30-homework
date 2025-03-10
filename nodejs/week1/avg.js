/*/What should happen if the provided arguments are not numbers (node avg.js 1 two hello 4)?
What about if no arguments are provided (node avg.js)?*/


function Avg(numbers){
    let sum =0;
    if (numbers.length === 0 || numbers.some(isNaN)){
        return `Please enter only valid numbers.`
    }else{
        numbers.forEach(num => {
            sum += num;
        
        });
        const avg = sum / numbers.length;
        return `The average of ${numbers} is ${avg}`;
    }
    
}
const numbers = process.argv.slice(2).map(Number);
console.log(Avg(numbers));

