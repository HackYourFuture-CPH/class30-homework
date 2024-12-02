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


function removeName(arr,name){
  const index = arr.indexOf(name);
  arr.splice(index,1);
  return arr;
  }
  
removeName(names,nameToRemove);
  
console.log(names); 