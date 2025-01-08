const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const indexOfArray = names.indexOf(nameToRemove);

names.splice(indexOfArray, 1);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
