let firstName= prompt("What is your first name?");
let lastName= prompt("What is your last name?");
let useFormalName =prompt("Do you whant to adress formal?")
let gender= prompt("What is your gender?")
function getFullname(firstName,lastName,useFormalName,gender){
    if (useFormalName === "yes" || useFormalName === "Yes"  && gender==="male" || gender==="Male"){
        return "Lord" + " " + firstName + " "+ lastName;
    }
    else if(useFormalName === "yes" || useFormalName === "Yes"  && gender==="female" || gender==="Female"){
        return "Madam" + " " + firstName + " "+ lastName;
    }
    else{ 
        return firstName + " "+ lastName;}
}

console.log(getFullname(firstName,lastName,useFormalName,gender));