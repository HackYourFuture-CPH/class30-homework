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
  
  function removeName(names, nameToRemove) {
    const index = names.indexOf(nameToRemove); 
    if (index !== -1) { 
      names.splice(index, 1); 
    }
  }
  
e
  removeName(names, nameToRemove);
  console.log(names); 