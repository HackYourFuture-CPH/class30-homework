const firstName = "Juan";
const surname = "Astrada";
let useFormalName = false;
let isFemale = false;

function getFullName (firstName, surname, useFormalName, isFemale) {
    
    if (firstName === "" || surname === ""){
        return "You should complete your name";
    }

    if (isFemale && useFormalName) {
        return "Lady " + firstName + " " + surname;
    }
    else if (isFemale === false && useFormalName === true){
        return  "Lord " + firstName + " " + surname;
    }
    else if (isFemale === false && useFormalName === false){
        return firstName + " " + surname;
    }
}

console.log(getFullName(firstName, surname, useFormalName, isFemale));  
console.log(getFullName("", "Astrada", true, false));  
console.log(getFullName("Juan", "", true, false));     
console.log(getFullName("", "", true, false));       
