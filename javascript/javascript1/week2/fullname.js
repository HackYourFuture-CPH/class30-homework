function getFullName(
  firstname,
  surname,
  useFormalName = false,
  isItMale = true
) {
  const sex = isItMale ? "Lord" : "Majesty";
  const fullName = useFormalName
    ? `${sex} ${firstname} ${surname}`
    : `${firstname} ${surname}`;
  console.log(fullName);
}

let fullName1 = getFullName("Benjamin", "Hughes");
let fullName2 = getFullName("Ahmad", "Mohammad", true);
let fullName3 = getFullName("Elizabeth", "Queen", true, false);
