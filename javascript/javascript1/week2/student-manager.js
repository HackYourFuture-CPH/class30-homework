const class07Students = [];
function addStudentToClass(studentName) {
  
    studentName === "" ? console.log("Please add a name!"):undefined;

    if (studentName == "Queen"  || studentName === "queen"){
        class07Students.push("Queen");
        return;
    } else if(class07Students.length >= 6 && studentName !== "Queen"){
        return "Sorry there is no more space for other students.";
    }  else if (class07Students.length < 6 && !class07Students.includes(studentName) ) {
        class07Students.push(studentName);
    } else{
        console.log(`student ${studentName} is in the class`);
    }



}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}


addStudentToClass("Yuusuf");
addStudentToClass("Ahmed");
addStudentToClass("Muhudin");
addStudentToClass("Roble");
addStudentToClass("Cigale");
addStudentToClass("geedid");
addStudentToClass("queen");
addStudentToClass("icjeis");






console.log(getNumberOfStudents());