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

  const index = names.indexOf(nameToRemove); // Find the index of the name to remove
if (index !== -1) {
  names.splice(index, 1);
}
  console.log(names);