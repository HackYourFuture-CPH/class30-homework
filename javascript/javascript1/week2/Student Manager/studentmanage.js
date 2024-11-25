const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName.toLowerCase() === "queen") {
    class07Students.push(studentName);
  } else if (studentName === "") {
    console.log("Please enter your name");
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class07");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Gayathri");
addStudentToClass("Venkatraman");
addStudentToClass("Ramadoss");
addStudentToClass("Vaithiyanathan");
addStudentToClass("");
addStudentToClass("Deeksha");
addStudentToClass("Gayathri");
addStudentToClass("Queen");
addStudentToClass("Lalitha");

console.log(class07Students);
console.log(getNumberOfStudents());
