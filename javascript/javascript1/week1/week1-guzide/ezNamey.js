let firstWords = [
  "Easy",
  "Fantastic",
  "Awesome",
  "Start",
  "Dummy",
  "We-",
  "Net",
  "Quick",
  "Pust-",
  "Re-",
];
let secondWords = [
  "Corp",
  "Peasy",
  "Dum",
  "Off",
  "Do-IT",
  "X",
  "IT",
  "Go",
  "Up",
  "Hej!",
];

const randomNumber = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startUpName = firstWords[randomNumber] + secondWords[randomNumber2];
const startUpNameLength = startUpName.length;

console.log(
  "The startup: " +
    startUpName +
    " contains " +
    startUpNameLength +
    " characters"
);
