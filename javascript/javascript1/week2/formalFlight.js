let firstName= prompt("What is your first name?");
let lastName= prompt("What is your last name?");
let useFormalName =prompt("Do you whant to adress formal?")
function getFullname(firstName,lastName,useFormalName){
    if (useFormalName= yes ){
        return "Lord" + firstName + " "+ lastName;
    }
    else{ 
        return firstName + " "+ lastName;}
}

console.log(getFullname(firstName,lastName,useFormalName));