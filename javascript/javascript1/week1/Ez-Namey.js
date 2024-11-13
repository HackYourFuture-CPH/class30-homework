const firstWords = ["Easy", "Awesome", "Corporate", "Big", "Funny", "Friendly", "Cool", "Handsome", "Attractive", "Cute"];
const secondWords = ["Company", "Corporation", "Community", "Society", "Association", "Conference", "Team", "Organization", "Agency", "Factory" ];

const randomFirstNumber = Math.floor(Math.random() * 10);
const randomSecondNumber = Math.floor(Math.random() * 10);

let startupName = firstWords[randomFirstNumber] + " " + secondWords[randomSecondNumber];
let startupNameLenght = startupName.length;

console.log(`The startup: "${startupName}" contains ${startupNameLenght} characters`);

