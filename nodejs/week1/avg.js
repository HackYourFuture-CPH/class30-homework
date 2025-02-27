const args = process.argv.slice(2);

const numbers = args.map(Number).filter(num => !isNaN(num));

if (numbers.length === 0) {
  console.log('Please, write at least one number');
} else {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  console.log(average);
}
