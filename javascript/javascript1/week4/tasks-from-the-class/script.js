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

//TASK : Character frequencies

function getCharacterFrequencies(input) {
  const frequencyMap = {};

  for (const char of input) {
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }

  const characters = Object.entries(frequencyMap).map(([character, count]) => ({
    character,
    count,
  }));

  return {
    characters,
    length: input.length,
  };
}

console.log(getCharacterFrequencies('happy'));

//TASK : Palindromic substring
function longestPalindromicSubstring(string) {
  let longest = "";
  for (let i = 0; i < string.length; i++){
    for (let j = i; j < string.length; j++){
      const substring = string.slice(i, j + 1);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

//TASK : Credit card info
function getCardInfo(cardNumber) {
  const cardStr = cardNumber.toString();

  switch (true) {
    case /^4\d{12}(\d{3})?$/.test(cardStr):
      return 'visa';

    case /^5[1-5]\d{14}$/.test(cardStr):
    case /^2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12}$/.test(cardStr):
      return 'mastercard';

    case /^3[47]\d{13}$/.test(cardStr):
      return 'amex';

    case /^6(011|5\d{2}|4[4-9]\d|22[1-9]|22[2-9])\d{12}$/.test(cardStr):
      return 'discover';

    case /^3(0[0-5]|[68]\d)\d{11}$/.test(cardStr):
      return 'diners club';

    case /^35(2[89]|[3-8]\d)\d{12}$/.test(cardStr):
      return 'jcb';

    default:
      return 'unknown';
  }
}

console.log(getCardInfo(4781321334789876)); 
console.log(getCardInfo(5223456789012345)); 
console.log(getCardInfo(371449635398431));  
console.log(getCardInfo(6011123456789012)); 
console.log(getCardInfo(3056930009020004)); 
console.log(getCardInfo(3530111333300000)); 
console.log(getCardInfo(1234567890123456)); 

//TASK : Tic Tac Toe
function ticTacToe() {
  const position = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];

  function getRenderedGame(board) {
    const border = '*'.repeat(7);
    const rows = board.map(row => `*${row.join('*')}*`).join('\n');
    return `${border}\n${rows}\n${border}`;
  }

  function getGameinfo(board) {
    const checkWinner = player => {
      if (board.some(row => row.every(cell => cell === player))) return true;
      for (let col = 0; col < 3; col++) {
        if (board.every(row => row[col] === player)) return true;
      }
      if (
        (board[0][0] === player &&
          board[1][1] === player &&
          board[2][2] === player) ||
        (board[0][2] === player &&
          board[1][1] === player &&
          board[2][0] === player)
      )
        return true;

      return false;
    };

    const isFull = board.flat().every(cell => cell !== ' ');

    const winner = checkWinner('x') ? 'x' : checkWinner('o') ? 'o' : undefined;
    const loser = winner ? (winner === 'x' ? 'o' : 'x') : undefined;

    return {
      winner,
      loser,
      hasEnded: !!winner || isFull,
      nextPlayer:
        !winner && !isFull
          ? board.flat().filter(cell => cell !== ' ').length % 2 === 0
            ? 'x'
            : 'o'
          : undefined,
    };
  }

  function playGame() {
    let gameInfo = getGameinfo(position);

    while (!gameInfo.hasEnded) {
      console.clear();
      console.log(getRenderedGame(position));
      console.log(`Next player: ${gameInfo.nextPlayer}`);

      const row = parseInt(prompt('Enter row (0, 1, or 2):'), 10);
      const col = parseInt(prompt('Enter column (0, 1, or 2):'), 10);

      if (
        !Number.isInteger(row) ||
        !Number.isInteger(col) ||
        row < 0 ||
        row > 2 ||
        col < 0 ||
        col > 2 ||
        position[row][col] !== ' '
      ) {
        console.log('Invalid move! Try again.');
        continue;
      }

      position[row][col] = gameInfo.nextPlayer;
      gameInfo = getGameinfo(position);
    }

    console.clear();
    console.log(getRenderedGame(position));
    if (gameInfo.winner) {
      console.log(`Winner: ${gameInfo.winner}`);
    } else {
      console.log("It's a tie!");
    }
  }

  playGame();
}

ticTacToe();
