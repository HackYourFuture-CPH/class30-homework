const class07Students = [];
function addStudentToClass(studentName = String) {

let message = "Only strings are allowed."
    if(typeof studentName !=='string'){
        return message;
    }else if(studentName !== " " && !class07Students.find(name => name === studentName && getNumberOfStudents.length < 6)){
        class07Students.push(studentName);
        message = `${studentName} has been added to class 07`;
    }else if(studentName ==="Queen"){
        class07Students.push(studentName);
        message = `it is an honor to have the ${studentName} in class 07`;
    }else if( class07Students.find(name => name === studentName)){
        message = `Student ${studentName} is already in the class`;
    }else if(studentName ==="" || studentName ===" "){
        message = `Error: your student name is not acceptable.`;
    }
    else{
        message = "please check your input again.";
    }
    return message;
  }


function getNumberOfStudents() {
    return class07Students.length;
}

console.log(addStudentToClass("jalil"))
console.log(addStudentToClass("jalil"))
console.log(addStudentToClass(" "))
console.log(addStudentToClass(5))

console.log(class07Students)