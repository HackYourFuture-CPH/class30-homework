function getFullname(
  firstname,
  surname,
  useFormalName = false,
  gender = "female"
) {
  if (!firstname || !surname) {
    console.log("Please provide both your FIRST NAME and SURNAME.");
    return null;
  }

  let nameTitle = "";
  if (useFormalName) {
    if (gender === "female") {
      nameTitle = "Lady ";
    } else if (gender === "male") {
      nameTitle = "Lord ";
    } else {
      nameTitle = "";
    }
  }
  let fullName = nameTitle + firstname + " " + surname;
  return fullName;
}

console.log(getFullname("Benjamin", "How", false, "male"));
console.log(getFullname("Benjamin", "", true, "male"));
console.log(getFullname("", "How", true, "male"));
console.log(getFullname("Sara", "Jensen", true, "female"));
console.log(getFullname("Benjamin", "Hughes", true, "male"));
