// https://medium.com/@ryan_forrester_/average-of-an-array-in-javascript-how-to-guide-85e97dd1443e
// ref for the average calculation

function calculateAverage(nums) {
  if (nums.length === 0) return 0;
  let sum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / nums.length;
}

let args = process.argv.slice(2);

let numbers = args.map(Number);

let avg = calculateAverage(numbers);
console.log(avg);
