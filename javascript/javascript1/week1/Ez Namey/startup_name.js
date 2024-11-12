const firstWords = [
  "Hive",
  "Vibe",
  "Cloud",
  "Green",
  "Sync",
  "Neo",
  "Bright",
  "Spark",
  "Urban",
  "Swift",
];

const secondWords = [
  "Edge",
  "Nest",
  "Venture",
  "Link",
  "Pulse",
  "Path",
  "Wave",
  "Flow",
  "Bridge",
  "Tech",
];

const randomNumber = Math.floor(Math.random() * 10);

const startUpName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  "The startup: " +
    startUpName +
    " contains " +
    startUpName.length +
    " characters"
);
