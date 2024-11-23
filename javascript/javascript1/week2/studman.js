const class07Students = [];
const maxStudents = 6;

function addStudentToClass(studentName) {
    if (!studentName) {
        return "Student name cannot be empty.";
    }

    if (class07Students.includes(studentName)) {
        return "Student" + studentName +  "is already in the class.";
    }

    if (class07Students.length >= maxStudents && studentName === "Queen") {
        return "Cannot add more students to class 07.";
    }

    class07Students.push(studentName);
    return "Student" + studentName +  "has been added to the class.";
}

function getNumberOfStudents() {
    return class07Students.length;
}
