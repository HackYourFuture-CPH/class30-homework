let firstName= prompt("What is your first name?");
let lastName= prompt("What is your last name?");
function getFullname(firstName,lastName){
    return firstName + " "+ lastName;
}

console.log(getFullname(firstName,lastName));