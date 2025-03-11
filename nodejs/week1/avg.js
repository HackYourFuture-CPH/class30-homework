const args = process.argv.slice(2);
const numbers = args.map(Number).filter(num => !isNaN(num));


if (numbers.length === 0) {
    console.log("enter valid number");
} else {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let avg = sum / numbers.length;
    console.log(`average: ${avg}`);
}
