let firstWords = ["One", "New", "Di", "All", "The", "Dan", "A", "Obsidian", "Cloud", "365"];
let secondWords = ["Tech", "Jysk", "Dev", "Sol", "Suite", "In", "AI", "Click", "Soft", "Light"]
let randomIndex1 = Math.floor(Math.random() * firstWords.length);
let randomIndex2 = Math.floor(Math.random() * secondWords.length);
let startupName = firstWords[randomIndex1]+secondWords[randomIndex2];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters.`)
