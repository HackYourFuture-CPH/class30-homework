const class07Students = [];

function getNumberOfStudents() {
  return class07Students.length;
}

function addStudentToClass(studentName) {
  if (studentName == "") {
    console.log("Student name cannot be empty");
    return;
  }

  if (studentName === "Queen") {
    if (!class07Students.includes(studentName)) {
      class07Students.push(studentName);
      console.log(class07Students);
    }
    return;
  }

  if (getNumberOfStudents() >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }
  class07Students.push(studentName);
  console.log(class07Students);
}

addStudentToClass("");
addStudentToClass("Güzide");
addStudentToClass("Mustafa");
addStudentToClass("Jovita");
addStudentToClass("Elitsa");
addStudentToClass("Mads");
addStudentToClass("Tuba");
addStudentToClass("Oğuz");
addStudentToClass("Queen Mary");
