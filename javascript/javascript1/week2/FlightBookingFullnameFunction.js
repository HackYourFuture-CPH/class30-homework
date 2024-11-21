function getFullname(firstname, surname, useFormalName, gender) {
    if (useFormalName === true) {
        if (gender === "male") {
            return "Lord " + firstname + " " + surname;
        } else if (gender === "female") {
            return "Lady " + firstname + " " + surname;
        }
    }
    return firstname + " " + surname;
}

let fullname1 = getFullname("Benjamin", "Hughes", true, "male");
let fullname2 = getFullname("Emma", "Watson", true, "female");
let fullname3 = getFullname("John", "Cena", false, "male");
let fullname4 = getFullname("Cardi", "B", false, "female");

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
