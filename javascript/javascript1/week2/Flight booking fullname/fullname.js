let userFirstName = prompt("Enter your first name : ");
let userSurName = prompt("Enter your Sur Name : ");
let useFormalName = prompt("Do you want to use your formal name? (yes or no)");
let userGender = prompt("Let me know your gender ? (male or female)");

function getFullName(firstName, surName, formalName, gender) {
  if (formalName.toLowerCase() === "yes" && gender.toLowerCase() === "male") {
    return "Lord " + firstName + " " + surName;
  }
  if (formalName.toLowerCase() === "yes" && gender.toLowerCase() === "female") {
    return "Mam " + firstName + " " + surName;
  }
  return firstName + " " + surName;
}

console.log(getFullName(userFirstName, userSurName, useFormalName, userGender));
