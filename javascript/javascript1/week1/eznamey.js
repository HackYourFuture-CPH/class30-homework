const firstWords = ["fabulous", "amazing", "awesome", "great", "wonderful", "genius", "creative", "incredible", "stunning"];
const secondWords = ["lab", "studio", "hub", "works", "forge", "factory", "nest", "hive", "vault", "collective"];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords [randomNumber]  +  secondWords [randomNumber];
console.log(startupName);