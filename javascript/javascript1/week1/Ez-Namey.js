const firstWords = [
    "Easy", "Awsome", "Corporate", "Smart", "Bright", "Hack Your", "Next", "True", "Green", "Pure"
];
const secondWords = [
    "Solutions", "Innovations", "Tech", "Future", "Hub", "Lab", "Nest", "Sphere", "Engine", "Nest"
];
let startupName = firstWords[Math.floor(Math.random() * 10)] +" "+secondWords[Math.floor(Math.random() * 10)];
console.log('"The startup: "'+ startupName +'" contains '+startupName.length+' characters."');