const firstWords = ["fabulous", "amazing", "awesome", "great", "wonderful", "genius", "creative", "incredible", "stunning"];
const secondWords = ["lab", "studio", "hub", "works", "forge", "factory", "nest", "hive", "vault", "collective"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = firstWords [randomNumber1]  +  secondWords [randomNumber2];
console.log(startupName);