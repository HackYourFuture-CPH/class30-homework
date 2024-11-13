const firstWords = ["Interesting", "Funny", "Powerful", "Awesome", "Legendary", "Bravo", "Daily", "Bright", "Spark", "Pure", ];
const secondWords = ["Labs", "Solutions", "Collective", "Tech", "Works", "Orbit", "Corporate", "Engine", "Stream", "Hub", ];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The startup: " + '"' + startupName + '"' + " contains " + startupName.length + " characters.")