const firstWords = [
  "Spark",
  "Neo",
  "Prime",
  "Wave",
  "Pulse",
  "Orbit",
  "Cloud",
  "Swift",
  "Vertex",
  "Quantum",
];
const secondWords = [
  "Tech",
  "Solutions",
  "Hub",
  "Labs",
  "Works",
  "Systems",
  "Dynamics",
  "Forge",
  "Vision",
  "Edge",
];
const randomNumberOne = Math.floor(Math.random() * 10);
const randomNumberTwo = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumberOne] + secondWords[randomNumberTwo];

console.log(startupName);
