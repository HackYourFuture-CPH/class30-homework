function getFullname(
  firstname,
  surname,
  useFormalName = false,
  gender = "female"
) {
  if (!firstname && !surname) {
    return "Please provide your FIRST NAME and SURNAME!";
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

  return console.log(nameTitle + firstname + " " + surname);
}

getFullname("Benjamin", "Hughes", true, "");

// you can try more possibilities here >> getFullname()
