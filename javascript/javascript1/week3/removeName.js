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

function removeItemFromArray(array, itemToRemove) {
    const index = array.indexOf(itemToRemove); 
        if (index !== -1) {
      array.splice(index, 1);
            }
    return array;
  }
 

const updatedNames = removeItemFromArray(names, nameToRemove);
console.log(updatedNames); 




  