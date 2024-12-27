const class07Students = [];

function getNumberOfStudents() {
  return class07Students.length;
}

function addStudentToClass(studentName) {
  if (studentName == "") {
    console.log("Student name cannot be empty");
    return;
  }

  if (!class07Students.includes(studentName)) {
    if (studentName === "Queen") {
      class07Students.push(studentName);
      console.log(class07Students);
      return;
    }

    if (getNumberOfStudents() >= 6) {
      console.log("Cannot add more students to class 07");
    }

    class07Students.push(studentName);
  } else {
    console.log(`"${studentName}" is already in your class!`);
    return;
  }
  console.log(class07Students);
}

addStudentToClass("Güzide");
addStudentToClass("Mustafa");
addStudentToClass("Jovita");
addStudentToClass("Elitsa");
addStudentToClass("Mads");
addStudentToClass("Güzide");
addStudentToClass("Tuba");
addStudentToClass("Queen");
addStudentToClass("");
