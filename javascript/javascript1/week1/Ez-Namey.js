const firstWords = [
    "Easy", "Awsome", "Corporate", "Smart", "Bright", "Hack Your", "Next", "True", "Green", "Pure"
];
const secondWords = [
    "Solutions", "Innovations", "Tech", "Future", "Hub", "Lab", "Nest", "Sphere", "Engine", "Nest"
];
const firstIndex = Math.floor(Math.random() * 10);
const secondIndex = Math.floor(Math.random() * 10);

const startupName = firstWords[firstIndex] +" "+secondWords[secondIndex];
console.log('"The startup: "'+ startupName +'" contains '+startupName.length+' characters."');