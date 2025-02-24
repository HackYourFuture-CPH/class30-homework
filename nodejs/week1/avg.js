const inputValues = process.argv.slice(2);
const numbersFromValues = inputValues.map((item) => Number(item));

if (numbersFromValues.some((num) => isNaN(num))) {
	console.error("Please, enter valid numbers");
	process.exit(1);
}

if (inputValues.length === 0) {
	console.log("Enter some numbers for calculating");
} else {
	const sum = numbersFromValues.reduce((acc, item) => acc + item, 0);
	const result = sum / numbersFromValues.length;
	console.log(result);
}
