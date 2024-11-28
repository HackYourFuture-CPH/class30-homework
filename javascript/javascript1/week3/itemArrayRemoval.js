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
  

  const updatedNames = names.filter((name) => name !== nameToRemove);
  
  console.log(updatedNames); 
  
  