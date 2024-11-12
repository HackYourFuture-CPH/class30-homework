//Ez Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Smart", "Quick", "Bright", "Dynamic", "Bold", "NextGen", "Vibrant", "Future"];
const secondWords = ["Tech", "Solutions", "Hub", "Innovations", "Labs", "Connect", "Works", "Insights", "Networks", "Concepts"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber1] + secondWords[randomNumber2];
const nameLength = startupName.length;
console.log("The startup: \"" + startupName + "\" contains \"" + nameLength + "\" characters.");