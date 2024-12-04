//TASK Fibonacci Sequence
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;
  let current = 0;

  for (let i = 2; i <= n; i++){
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
}

console.log(fib(5));
console.log(fib(10));

//TASK FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
fizzBuzz(4, 12);

//TASK : A sentiment analyzer
const positiveWords = [
  'love',
  'awesome',
  'incredible',
  'amazing',
  'great',
  'fantastic',
  'happy',
  'stunning',
];

const negativeWords = [
  'hate',
  'boring',
  'bad',
  'terrible',
  'awful',
  'horrible',
  'sad',
  'angry',
];

function getSentimentScore(sentence) {
  const words = sentence.toLowerCase().split(/\s+/);
  
  const result = {
    score: 0,
    positiveWords: [],
    negativeWords: []
  };

  for (const word of words) {
    if (positiveWords.includes(word)) {
      result.score += 1;
      result.positiveWords.push(word);
    } else if (negativeWords.includes(word)) {
      result.score -= 1;
      result.negativeWords.push(word);
    }
  }
  return result;
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
console.log(sentimentScoreObject);

//TASK : Credit card number formatter
function formatCreditCardNumber(input) {
  if (typeof input !== 'number' || isNaN(input)) {
    return { error: 'Invalid input: input must be a number' };
  }

  const inputStr = input.toString();

  const formatted = inputStr.replace(/(\d{4})(?=\d)/g, '$1 ');

  return {
    original: input,
    formatted: formatted
  };
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);

const invalidInputTest = formatCreditCardNumber("NotNumber");
console.log(invalidInputTest);
