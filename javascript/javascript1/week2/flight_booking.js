function getFullname(firstname, surname, useFormalName = false){   // I added false as the default boolean value, if we don't have false or true as an argument
    const lettersOnly = /^[a-zA-Z]+$/;
    
    if(typeof(firstname) === "string" && typeof(surname) === "string" && lettersOnly.test(firstname) && lettersOnly.test(surname)){
        if(useFormalName){
            return "Lord " + firstname + " " + surname;
        } else{
            return firstname + " " + surname;
        }
    } else{
        return "Firstname or surname are not correct!";
    }
}

const fullname1 = getFullname("Benjamin", "Hughes", true); 
const fullname2 = getFullname("Andrii", "Khandohii");
const fullname3 = getFullname();

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);


// Works for women


// function getFullname(firstname, surname, isMale, useFormalName = false ){

//     if(typeof(firstname) === "string" && typeof(surname) === "string"){
//         if(useFormalName){
//             if(isMale){
//                 return ("Lord " + firstname + " " + surname);
//             }
//             if(!isMale){
//                 return ("Lady " + firstname + " " + surname);
//             }
//         } else{
//             return (firstname + " " + surname);
//         }
//     } else {
//         return ("Firstname or surname are not correct!");
//     }
    
// }

// const fullname1 = getFullname("Benjamin", "Hughes", true, true); 
// const fullname2 = getFullname("Andrii", "Khandohii", true);
// const fullname3 = getFullname("Ann", "Smith", false, true);
// const fullname4 = getFullname("Elizabeth", false, true);

// console.log(fullname1);
// console.log(fullname2);
// console.log(fullname3);
// console.log(fullname4);
