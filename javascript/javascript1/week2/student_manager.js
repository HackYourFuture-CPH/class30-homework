const class07Students = [];
function addStudentToClass(studentName) {
    if(typeof(studentName)==="undefined" || studentName.length == 0){
        return(console.log("Name is not correct!"));
    }

    for (let i = 0; i < getNumberOfStudents(); i++) {
        if(class07Students[i]==studentName){
            return(console.log(`Student ${studentName} is already in the class.`));
        }
    }

    if(getNumberOfStudents() == 6 && studentName!=="Queen"){
        return(console.log("Cannot add more students to class 07"));
    }

    if(studentName==="Queen"){
        if(getNumberOfStudents() == 6){
            class07Students.shift();
            class07Students.unshift("Queen");
            return (console.log("Queen added"));
        } else {
            class07Students.unshift("Queen");
            return (console.log("Queen added"));
        }
    }

    if(typeof(studentName)==="string"){
        class07Students.push(studentName);
        return(console.log(`${studentName} added`));
    }
    
}

function getNumberOfStudents() {
  return(class07Students.length);
}

addStudentToClass("Ann");
addStudentToClass();
addStudentToClass("Serhii");
addStudentToClass("Mike");
addStudentToClass("Andrii");
addStudentToClass("John");
addStudentToClass("John");
addStudentToClass("Alex");
addStudentToClass();
addStudentToClass("Elizabeth");
addStudentToClass("Queen");

console.log("Number of students:" + getNumberOfStudents());
for (let i = 0; i < class07Students.length; i++) {
    console.log(class07Students[i]); 
}




