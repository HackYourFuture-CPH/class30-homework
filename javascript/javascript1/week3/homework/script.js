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
  const borrar = names.indexOf(nameToRemove);

  
  // Write some code here
  
  if (names.includes(nameToRemove)) {

     names.splice(borrar, borrar);

    }



  // Code done


  console.table(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']