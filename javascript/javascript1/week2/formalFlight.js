//Flight booking fullname function(Formal fullname)
let firstName= prompt("What is your first name?");
let lastName= prompt("What is your last name?");
let useFormalName =prompt("Do you whant to adress formal? (yes or no)")
let gender;

function getFullname(firstName, lastName, useFormalName) {
  if (useFormalName.toLowerCase() === "yes") {
    gender = prompt("What is your gender? (male or female)");
    if (gender.toLowerCase() === "male" || gender.toLowerCase() === "m") {
      return "Mr. " + firstName + " " + lastName;
    } else if (
      gender.toLowerCase() === "female" ||
      gender.toLowerCase() === "f"
    ) {
      return "Mrs. " + firstName + " " + lastName;
    }
  } else {
    return firstName + " " + lastName;
  }
}

console.log(getFullname(firstName, lastName, useFormalName));
