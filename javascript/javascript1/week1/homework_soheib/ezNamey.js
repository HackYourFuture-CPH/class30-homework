const firstWords = ["One", "New", "Di", "All", "The", "Dan", "A", "Obsidian", "Cloud", "365"];
const secondWords = ["Tech", "Jysk", "Dev", "Sol", "Suite", "In", "AI", "Click", "Soft", "Light"]
const randomIndex1 = Math.floor(Math.random() * firstWords.length);
const randomIndex2 = Math.floor(Math.random() * secondWords.length);
let startupName = firstWords[randomIndex1]+secondWords[randomIndex2];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters.`)
