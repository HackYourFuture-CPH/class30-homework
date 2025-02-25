function calcAvg (numbers) {
    let sum = 0;
    if(numbers.length === 0 || numbers.some(isNaN)) {
        return `Please enter valid numbers.`
    }else {
        numbers.forEach((num) => {
            sum += num;
        });
        const avgNumber = sum / numbers.length;
        return avgNumber.toFixed(2);
    }
}

const arguments = process.argv.slice(2);
const numbers = arguments.map(Number);
const avg = calcAvg(numbers);
console.log(avg)