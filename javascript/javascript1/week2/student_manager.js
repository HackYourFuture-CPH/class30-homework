const class07Students = [];
function addStudentToClass(studentName) {
    const lettersOnly = /^[a-zA-Z]+$/;

    if(typeof studentName !== 'string' || studentName === '' || !lettersOnly.test(studentName)){  //here as in the booking application, I have added a name accuracy check
        return(console.log("Name is not correct!"));
    }

    if(getNumberOfStudents() === 6 && studentName !== "Queen"){
        return(console.log("Cannot add more students to class 07")); 
    }

    for (let i = 0; i < getNumberOfStudents(); i++) {
        if(class07Students[i]==studentName){
            return(console.log(`Student ${studentName} is already in the class.`));
        }
    // I want to output a message to the console that the name is already there, and for the function to stop at this point, so I use return and console.log
    }

    if(studentName === "Queen"){
        if(getNumberOfStudents() == 6){
            class07Students.shift();
            class07Students.unshift("Queen");
            return (console.log("Queen added"));
        } else {
            class07Students.unshift("Queen");
            return (console.log("Queen added"));
        }
    }
    //I'm just sticking to the rule that a class can't be bigger than 6, so I did it this way :)

    class07Students.push(studentName);
    return(console.log(`${studentName} added`));
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




