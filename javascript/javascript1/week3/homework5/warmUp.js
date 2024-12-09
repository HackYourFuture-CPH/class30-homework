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
  
  // Write some code here

  function removeNameFromArray(name, arr=names){
    const indexOfName = arr.indexOf(name);
    return arr.splice(indexOfName, 1)
  }

  removeNameFromArray(nameToRemove, names);
  
  // Code done

  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']