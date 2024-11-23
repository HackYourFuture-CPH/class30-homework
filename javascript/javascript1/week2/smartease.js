function getFullName(formalName, firstName, surname) {
    let fullName = ""; 
    if (formalName === true ) {
        fullName = "Lady " + firstName + " " + surname;
      } else if (formalName === true ) {
        fullName = "Lord " + firstName + " " + surname;
      } else {
        fullName = firstName + " " + surname };  
        return fullName;
      };
    
      let fullName1 = getFullName(true, "Aminata", "Ba");
      console.log(fullName1); 
      
      let fullName2 = getFullName(true, "Benjamin", "Hughes");
      console.log(fullName2); 
     
  

  // gender  specified
  function getFullName2(formalName, firstName, surname, gender) {
    let fullName = ""; 

    if (formalName === true && gender === "woman") {
      fullName = "Lady " + firstName + " " + surname;
    } else if (formalName === true && gender === "man") {
      fullName = "Lord " + firstName + " " + surname;
    } else {
      fullName = firstName + " " + surname; 
    }
  
    return fullName;
  }
  let fullName3 = getFullName2(true, "Aminata", "Ba", "woman");
console.log(fullName3); 

let fullName4 = getFullName2(true, "Benjamin", "Hughes", "man");
console.log(fullName4); 