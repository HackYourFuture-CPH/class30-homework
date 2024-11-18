// Exercise 4: Student manager

const class07Students = [];

function addStudentToClass(studentName) {
	if (!studentName.trim()) {
		console.log("Please, enter the name");
		return;
	}

	const exisctingStudent = class07Students.find(
		(student) => student === studentName
	);

	if (exisctingStudent) {
		console.log(`Student ${exisctingStudent} is already in the class`);
		return;
	}

	if (studentName === "Queen") {
		class07Students.unshift(studentName);
	}

	if (class07Students.length >= 6) {
		console.log("Cannot add more students to class 07");
		return;
	}

	class07Students.push(studentName);
}

function getNumberOfStudents() {
	return class07Students.length;
}

addStudentToClass("Ben");
addStudentToClass("Anna");
addStudentToClass("Patrick");
addStudentToClass("Kevin");
addStudentToClass("Lene");
addStudentToClass("Erik");

addStudentToClass("Erik");
addStudentToClass("Queen");
addStudentToClass("Queen");

addStudentToClass(" ");

const quantityOfStudents = getNumberOfStudents();

console.log(quantityOfStudents);
console.log(class07Students);
