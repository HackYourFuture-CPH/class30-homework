let firstName= prompt("What is your first name?");
let lastName= prompt("What is your last name?");
let useFormalName =prompt("Do you whant to adress formal? (yes or no)")
let gender= prompt("What is your gender? (male or female)")

function getFullname(firstName,lastName,useFormalName,gender){
    if (useFormalName.toLowerCase() === "yes" && gender.toLowerCase()==="male"){
        return "Lord "  + firstName + " "+ lastName;
    }

    else if(useFormalName.toLowerCase() === "yes" && gender.toLowerCase()==="female"){
        return "Madam " + firstName + " "+ lastName;
    }

    else{ 
        return firstName + " "+ lastName;}
}

console.log(getFullname(firstName,lastName,useFormalName,gender));