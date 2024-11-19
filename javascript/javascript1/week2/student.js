let studentName= prompt("What is your name?")

const class07Students = [];
function addStudentToClass(studentName) {

    // Check if the student is already in the class
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    }

     // Check if the class is full
    if (class07Students.length>7){
      console.log ("Cannot add more students to class 07");
      return;
    }

    // Special rule for the Queen
    if (studentName === "Queen") {
        class07Students.push(studentName);
        console.log(`Student ${studentName} added to the class`);
        return;
    }

    // Check if the student name is an empty string
    if (studentName === "") {
        console.log("Cannot add an empty name to the class");
        return;
    }

       // Add the student to the class
       class07Students.push[studentName];
       console.log(`Student ${studentName} added to the class.`);

}