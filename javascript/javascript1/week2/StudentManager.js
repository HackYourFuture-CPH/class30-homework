const class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("Name cannot be empty");
        return;
    }

    if (class07Students.includes(studentName)) {
        console.log(studentName + " is already in the class");
        return;
    }

    if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Class is full");
        return;
    }

    class07Students.push(studentName);
}

function getNumberOfStudents() {
    return class07Students.length;
}


addStudentToClass("Benjamin");
addStudentToClass("Sarah");
addStudentToClass("Benjamin");
addStudentToClass("Queen");
addStudentToClass("John");
addStudentToClass("Maria");
addStudentToClass("Daniel");
addStudentToClass("Sophia");


console.log("Number of students:", getNumberOfStudents());