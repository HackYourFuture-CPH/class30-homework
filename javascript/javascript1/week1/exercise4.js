// Exercise 4 Ez Namey (Startup name generator)

const randomNumber = Math.floor(Math.random() * 10);
const firstWords = [
	"Easy",
	"Awesome",
	"Corporate",
	"Modern",
	"Cool",
	"Cute",
	"Cozy",
	"Crazy",
	"Big",
	"New",
];
const secondWords = [
	"Way",
	"Bussiness",
	"Startup",
	"Deal",
	"Future",
	"Life",
	"Day",
	"Adventure",
	"Fairytale",
	"Prank",
];

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
	'The startup: "' +
		startupName +
		'" contains ' +
		startupName.length +
		" characters"
);
