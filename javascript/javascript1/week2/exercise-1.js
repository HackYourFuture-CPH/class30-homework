// Exercise 1: Flight booking fullname function

function getFullName(firstname, surname, useFormalName = false, gender) {
	if (!firstname.trim() && !surname.trim()) {
		return "Please, enter your name";
	}

	if (!useFormalName) {
		return `${firstname} ${surname}`;
	}

	return useFormalName && gender === "male"
		? `Lord ${firstname} ${surname}`
		: useFormalName && gender === "female"
		? `Lady ${firstname} ${surname}`
		: `${firstname} ${surname}`;
}

const fullName1 = getFullName("Andrii", "Pavliuk", true, "male");
const fullName2 = getFullName("Anna", "Johnson", true, "female");
const fullName3 = getFullName("Kate", "Petersen", false, "female");
const fullName4 = getFullName("", "", true);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);

// In this task I've made 4 variables just to describe different cases of using incl. gender
// I've defined only 2 possible kinds of gender.
// Meaning is at they comes only in these names (like value from some input)
